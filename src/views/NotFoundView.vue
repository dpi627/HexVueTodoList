<template>
  <div id="notFoundPage" class="bg-yellow">
    <div class="conatiner notFoundPage vhContainer">
      <div class="centered-content">
        <img class="logoImg" src="/img/logo.png" alt="">
        <h2 class="page-title">頁面不存在</h2>
        <p class="page-description">抱歉，您造訪的頁面不存在或已被移除</p>
        <img class="main-image" src="/img/404.jpeg" alt="404">
        <router-link to="/" class="home-button">回首頁</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// 404 頁面，無需額外邏輯
</script>

<style scoped>
.notFoundPage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logoImg {
  width: 120px;
  margin-bottom: 24px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.page-description {
  color: #9f9a91;
  margin-bottom: 24px;
  line-height: 1.5;
  font-size: 0.875rem;
}

.main-image {
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 24px;
}

.home-button {
  width: 128px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background: #333333;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-button:hover {
  opacity: 0.9;
}

@media (max-width: 576px) {
  .notFoundPage {
    padding: 48px 31px;
  }

  .main-image {
    width: 250px;
  }
}
</style>
