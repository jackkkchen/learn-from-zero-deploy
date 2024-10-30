<template>
  <ClientOnly>
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
  </ClientOnly>
</template>
