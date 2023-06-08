<script setup lang="ts">
import { ref, computed } from "vue";

import { useGetGenreCountsQuery } from "./EntryForm.generated";

const inputText = ref("");

const show = ref(false);
const queryInput = computed(() => {
  return { name: inputText.value ? inputText.value : "" };
});

const { result: testResult, refetch } = useGetGenreCountsQuery(queryInput);

const testResultData = computed(() => testResult.value);

// :')
const buttoKun = () => {
  refetch();
  show.value = !show.value;
};
</script>

<template>
  <h1>Test Result</h1>
  <input type="text" v-model="inputText" />
  <button @click="buttoKun">Butto-kun</button>
  <div v-if="show && testResultData">
    <p>Data for {{ inputText }}</p>
    <span>{{ testResultData.User }}</span>
  </div>
</template>
