<template>
  <teleport to="body">
    <div v-if="show" class="loading-overlay">
      <div class="loading-backdrop"></div>
      <div class="loading-content">
        <div class="loading-card">
          <div class="loading-image">
            <img :src="currentImage" alt="載入中" class="emo-image" />
          </div>
          <div class="loading-text">載入中...</div>
          <div class="loading-spinner">
            <div class="spinner"></div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { getRandomEmoImage } from '@/utils/emoImageHelper'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const currentImage = ref('')
let intervalId = null

// 圖片輪播功能
const startImageRotation = () => {
  if (intervalId) return

  const updateImage = () => {
    const types = ['success', 'error', 'confirm']
    const randomType = types[Math.floor(Math.random() * types.length)]
    currentImage.value = getRandomEmoImage(randomType)
  }

  // 立即更新一次
  updateImage()

  // 每2秒更換圖片
  intervalId = setInterval(updateImage, 2000)
}

const stopImageRotation = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// 監聽 show 屬性變化
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      startImageRotation()
    } else {
      stopImageRotation()
    }
  },
)

onMounted(() => {
  if (props.show) {
    startImageRotation()
  }
})

onUnmounted(() => {
  stopImageRotation()
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
}

.loading-content {
  position: relative;
  z-index: 1;
}

.loading-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-align: center;
  min-width: 300px;
  animation: fadeInScale 0.3s ease-out;
}

.loading-image {
  margin-bottom: 1rem;
}

.emo-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  animation: bounce 2s infinite;
}

.loading-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.loading-spinner {
  display: flex;
  justify-content: center;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .loading-card {
    margin: 1rem;
    padding: 1.5rem;
    min-width: 160px;
  }

  .emo-image {
    width: 60px;
    height: 60px;
  }

  .loading-text {
    font-size: 1rem;
  }
}
</style>
