<template>
  <div class="flex min-h-screen flex-col">
    <DefaultNavbar />

    <UContainer class="w-full flex flex-col items-center">
      <div class="w-full max-w-screen-md px-6 xl:px-0 mt-8">
        <NuxtPage />
      </div>
    </UContainer>

    <DefaultFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900'
  }
})
</script>
