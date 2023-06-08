<script setup lang="ts">
import { ref, computed } from "vue";
import InputText from "primevue/inputtext";

import { useGetGenreCountsLazyQuery } from "./EntryForm.generated";

const inputText = ref("");

const queryInput = computed(() => {
  return { name: inputText.value ? inputText.value : "" };
});

const { load, result: testResult } = useGetGenreCountsLazyQuery(queryInput);

const testResultData = computed(() => testResult.value);

// :')
const buttoKun = () => {
  load();
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <InputText id="username" v-model="inputText" />
    <button @click="buttoKun">Butto-kun</button>
  </div>
  <div v-if="testResultData">
    <p>Data for {{ inputText }}</p>
    <span>{{ testResultData.User }}</span>
  </div>
</template>
