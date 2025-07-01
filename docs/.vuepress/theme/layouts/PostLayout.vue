<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 根据当前路径确定返回路径
const getBackPath = computed(() => {
  const path = route.path
  
  if (path.startsWith('/technology/')) {
    return '/technology/'
  } else if (path.startsWith('/wealth/')) {
    return '/wealth/'
  } else if (path.startsWith('/jottings/')) {
    return '/jottings/'
  }
  
  return '/'
})

// 根据路径获取返回按钮文本
const getBackText = computed(() => {
  const path = route.path
  
  if (path.startsWith('/technology/')) {
    return '返回技术文章'
  } else if (path.startsWith('/wealth/')) {
    return '返回理财文章'
  } else if (path.startsWith('/jottings/')) {
    return '返回随笔文章'
  }
  
  return '返回首页'
})
</script>

<template>
  <div class="post-layout">
    <slot />
  </div>
</template>

<style scoped>
.post-layout {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 0 var(--vp-layout-sidebar-width);
}

@media (max-width: 960px) {
  .post-layout {
    padding: 0 24px;
  }
}

@media (max-width: 640px) {
  .post-layout {
    padding: 0 16px;
  }
}
</style> 