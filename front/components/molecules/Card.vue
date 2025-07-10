<script setup lang="ts">
const { t } = useI18n()
const { data, status } = useAsyncGql('SpaceQuery')
</script>

<template>
  <UCard v-if="status === 'pending'" >
    Loading...
  </UCard>
  <UCard v-if="status === 'error'" >
    Error...
  </UCard>
  <UCard v-else>
    <template #header>
      {{ t('hello') }}
    </template>

    {{ data }}
  </UCard>
</template>

<i18n lang="yaml">
fr:
  hello: 'bonjour le monde!'
en:
  hello: 'hello world!'
</i18n>
