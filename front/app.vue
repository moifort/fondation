<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (newValue: boolean) => (colorMode.preference = newValue ? 'dark' : 'light'),
})
const language = navigator.language
</script>

<template>
  <UApp>
    <Icon :name="`circle-flags:${language}`" size="20"/>
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      @click="isDark = !isDark"
    />
    <NuxtPage />
  </UApp>
</template>
