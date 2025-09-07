// 獲取 base 路徑
const getBasePath = () => {
  return import.meta.env.BASE_URL || '/'
}

// 預載入單一圖片
export const preloadImage = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => {
      console.log(`✅ 圖片預載成功: ${imagePath}`)
      resolve({
        success: true,
        path: imagePath,
        image: img,
      })
    }

    img.onerror = () => {
      console.warn(`❌ 圖片預載失敗: ${imagePath}`)
      reject(new Error(`Failed to preload image: ${imagePath}`))
    }

    img.src = imagePath
  })
}

// 預載入多張圖片 (並行載入)
export const preloadImages = (imagePaths) => {
  const promises = imagePaths.map((path) =>
    preloadImage(path).catch((error) => ({
      success: false,
      path,
      error: error.message,
    })),
  )

  return Promise.all(promises)
}

// 預載入多張圖片 (帶進度回調)
export const preloadImagesWithProgress = (imagePaths, onProgress) => {
  let loadedCount = 0
  const totalCount = imagePaths.length

  const promises = imagePaths.map(async (path) => {
    try {
      const result = await preloadImage(path)
      loadedCount++
      if (onProgress) {
        onProgress({
          loaded: loadedCount,
          total: totalCount,
          percentage: Math.round((loadedCount / totalCount) * 100),
          currentPath: path,
        })
      }
      return result
    } catch (error) {
      loadedCount++
      if (onProgress) {
        onProgress({
          loaded: loadedCount,
          total: totalCount,
          percentage: Math.round((loadedCount / totalCount) * 100),
          currentPath: path,
          error: error.message,
        })
      }
      return {
        success: false,
        path,
        error: error.message,
      }
    }
  })

  return Promise.all(promises)
}

// 生成專案中所有圖片的路徑
export const generateAllImagePaths = () => {
  const basePath = getBasePath()

  const staticImages = [
    'img/logo.png',
    'img/logo-s.png',
    'img/empty-task.jpeg',
    'img/signin.jpeg',
    'img/signup.jpeg',
    'img/404.jpeg',
  ]

  // 生成表情圖片路徑 (confirm, error, success 各3張)
  const emoTypes = ['confirm', 'error', 'success']
  const emoImages = []

  emoTypes.forEach((type) => {
    for (let i = 1; i <= 3; i++) {
      emoImages.push(`img/emo-${type}-${i}.jpeg`)
    }
  })

  // 合併所有圖片路徑並加上 base path
  const allImages = [...staticImages, ...emoImages]
  return allImages.map((imagePath) => `${basePath}${imagePath}`)
}

// 預載入所有專案圖片
export const preloadAllProjectImages = async (options = {}) => {
  const { showProgress = false, onProgress = null, logResults = true } = options

  const imagePaths = generateAllImagePaths()

  if (logResults) {
    console.log(`🚀 開始預載入 ${imagePaths.length} 張圖片...`)
  }

  try {
    let results

    if (showProgress && onProgress) {
      results = await preloadImagesWithProgress(imagePaths, onProgress)
    } else {
      results = await preloadImages(imagePaths)
    }

    const successCount = results.filter((result) => result.success).length
    const failCount = results.length - successCount

    if (logResults) {
      console.log(`📊 圖片預載入完成: 成功 ${successCount} 張, 失敗 ${failCount} 張`)

      if (failCount > 0) {
        const failedImages = results
          .filter((result) => !result.success)
          .map((result) => result.path)
        console.warn('❌ 預載入失敗的圖片:', failedImages)
      }
    }

    return {
      success: failCount === 0,
      total: results.length,
      loaded: successCount,
      failed: failCount,
      results,
    }
  } catch (error) {
    if (logResults) {
      console.error('💥 圖片預載入過程發生錯誤:', error)
    }

    return {
      success: false,
      error: error.message,
      total: imagePaths.length,
      loaded: 0,
      failed: imagePaths.length,
    }
  }
}

// 輕量級預載入 (僅載入關鍵圖片)
export const preloadCriticalImages = async () => {
  const basePath = getBasePath()

  const criticalImages = [
    `${basePath}img/logo.png`,
    `${basePath}img/logo-s.png`,
    `${basePath}img/empty-task.jpeg`,
  ]

  console.log('🎯 預載入關鍵圖片...')

  try {
    const results = await preloadImages(criticalImages)
    const successCount = results.filter((result) => result.success).length

    console.log(`✅ 關鍵圖片預載完成: ${successCount}/${criticalImages.length}`)

    return {
      success: successCount === criticalImages.length,
      loaded: successCount,
      total: criticalImages.length,
    }
  } catch (error) {
    console.error('❌ 關鍵圖片預載失敗:', error)
    return {
      success: false,
      error: error.message,
    }
  }
}

// 檢查圖片是否已經快取
export const isImageCached = (imagePath) => {
  return new Promise((resolve) => {
    const img = new Image()

    img.onload = () => {
      // 如果圖片立即載入完成，表示已經快取
      resolve(img.complete && img.naturalWidth > 0)
    }

    img.onerror = () => {
      resolve(false)
    }

    img.src = imagePath
  })
}

// 獲取快取狀態報告
export const getCacheReport = async () => {
  const imagePaths = generateAllImagePaths()
  const cacheResults = await Promise.all(
    imagePaths.map(async (path) => ({
      path,
      cached: await isImageCached(path),
    })),
  )

  const cachedCount = cacheResults.filter((result) => result.cached).length

  return {
    total: imagePaths.length,
    cached: cachedCount,
    uncached: imagePaths.length - cachedCount,
    percentage: Math.round((cachedCount / imagePaths.length) * 100),
    details: cacheResults,
  }
}
