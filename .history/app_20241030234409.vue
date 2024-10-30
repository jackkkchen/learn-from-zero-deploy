<template>
  <div id="app">
    <ClientOnly>
      <AppHeader />
      <main>
        <NuxtLoadingIndicator />
        <Suspense>
          <NuxtPage />
          <template #fallback>
            <div>Loading...</div>
          </template>
        </Suspense>
      </main>
    </ClientOnly>
  </div>
</template>
