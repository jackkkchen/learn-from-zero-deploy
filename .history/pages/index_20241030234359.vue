<template>
  <ClientOnly>
    <Suspense>
      <ContentNavigation
        v-slot="{ navigation }"
        :query="queryContent('/python-zero/')"
      >
        <TutNav
          v-if="navigation && navigation[0]?.children"
          :nav="navigation[0].children"
        />
        <div v-else>Loading...</div>
      </ContentNavigation>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  name: "python-zero",
});
</script>
