<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UCard>
    <template #header>
      {{ t('hello') }}
    </template>

    Main content goes here.

    <template #footer>
      <UIcon name="i-lucide-lightbulb" class="size-5" />
      Footer content goes here.
    </template>
  </UCard>
</template>

<i18n lang="yaml">
fr:
  hello: 'bonjour le monde!'
en:
  hello: 'hello world!'
</i18n>
