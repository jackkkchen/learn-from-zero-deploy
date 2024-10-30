<template>
  <ClientOnly>
    <Suspense>
      <ContentNavigation
        v-slot="{ navigation }"
        :query="{ path: '/python-zero' }"
      >
        <TutNav
          v-if="navigation && navigation[0]?.children"
          :nav="navigation[0].children"
        />
        <div v-else>Loading navigation...</div>
      </ContentNavigation>

      <template #fallback>
        <div>Loading content...</div>
      </template>
    </Suspense>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  name: "python-zero",
});
</script>
