// 獲取 base 路徑
const getBasePath = () => {
  return import.meta.env.BASE_URL || '/'
}

// 獲取隨機表情圖片路徑
export const getRandomEmoImage = (type, count = 3) => {
  const types = ['success', 'error', 'confirm']
  const randomType = type || types[Math.floor(Math.random() * types.length)]
  const randomNumber = Math.floor(Math.random() * count) + 1
  const basePath = getBasePath()
  return `${basePath}img/emo-${randomType}-${randomNumber}.jpeg`
}

// 獲取隨機成功表情圖片
export const getRandomSuccessEmo = () => {
  return getRandomEmoImage('success')
}

// 獲取隨機錯誤表情圖片
export const getRandomErrorEmo = () => {
  return getRandomEmoImage('error')
}

// 獲取隨機確認表情圖片
export const getRandomConfirmEmo = () => {
  return getRandomEmoImage('confirm')
}

// 獲取載入時的隨機圖片輪播
export const getLoadingImageRotation = () => {
  const types = ['success', 'error', 'confirm']
  return types.map((type) => getRandomEmoImage(type))
}

// 新增：獲取完整的圖片路徑工具函數
export const getImagePath = (imagePath) => {
  const basePath = getBasePath()
  // 如果已經是完整的 URL 或已經包含 base 路徑，直接返回
  if (imagePath.startsWith('http') || imagePath.startsWith(basePath)) {
    return imagePath
  }
  // 移除開頭的 /，因為 basePath 已經包含了
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  return `${basePath}${cleanPath}`
}
