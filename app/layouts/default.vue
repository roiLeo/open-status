<template>
  <UApp>
    <div class="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <DefaultNavbar />

      <UContainer class="w-full flex flex-col items-center">
        <div class="w-full max-w-screen-md px-6 xl:px-0 mt-8">
          <NuxtPage />
        </div>
      </UContainer>

      <div class="rounded-full bg-primary-500 text-xs w-0"></div>
      <DefaultFooter />
    </div>
  </UApp>
</template>
