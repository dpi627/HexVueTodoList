// 獲取隨機表情圖片路徑
export const getRandomEmoImage = (type, count = 3) => {
  const types = ['success', 'error', 'confirm']
  const randomType = type || types[Math.floor(Math.random() * types.length)]
  const randomNumber = Math.floor(Math.random() * count) + 1
  return `/img/emo-${randomType}-${randomNumber}.jpeg`
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
