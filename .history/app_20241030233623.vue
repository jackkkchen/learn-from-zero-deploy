<template>
  <div id="app">
    <ClientOnly>
      <AppHeader />
    </ClientOnly>
    <main>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "My Nuxt App",
});
</script>
