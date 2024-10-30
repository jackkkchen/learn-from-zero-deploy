<template>
  <div>
    <ClientOnly>
      <AppHeader />
    </ClientOnly>
    <div>
      <Suspense>
        <NuxtPage />
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
// 确保组件已注册
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});
</script>
