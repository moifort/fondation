<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UCard>
    <template #header>
      {{ t('hello') }}
    </template>
  </UCard>
</template>

<i18n lang="yaml">
fr:
  hello: 'bonjour le monde!'
en:
  hello: 'hello world!'
</i18n>
