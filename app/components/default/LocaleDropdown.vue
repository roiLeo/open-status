<template>
  <USelect v-model="locale" :items="locales" label-key="name" value-key="code" size="md" />
</template>

<script lang="ts" setup>
const { locales, locale, setLocale } = useI18n()

watch(locale, (newLocale) => {
  setLocale(newLocale)
})
</script>
