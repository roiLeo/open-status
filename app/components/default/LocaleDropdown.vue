<template>
  <USelect v-model="locale" :options="locales" option-attribute="name" value-attribute="code" size="sm" />
</template>

<script lang="ts" setup>
const { locales, locale, setLocaleCookie } = useI18n()

watch(locale, (newLocale) => {
  setLocaleCookie(newLocale)
})
</script>
