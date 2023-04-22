<script lang="ts">
import gql from "graphql-tag";

const testQuery = gql`query ($id: Int) {
   Media (id: $id, type: ANIME) {
      id
    title {
      romaji
    }
  }
}`

</script>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@vue/apollo-composable'

const inputText = ref('')


const show = ref(false)
const queryInput = computed(() => { return { id: inputText.value ? inputText.value : 1 } })
const { result: testResult, refetch } = useQuery(testQuery, queryInput)
const testResultData = computed(() => testResult.value?.Media)



// :')
const buttoKun = () => {
  refetch()
  show.value = !show.value
}
</script>

<template>
  <h1>Test Result</h1>
  <input type="text" v-model="inputText" />
  <button @click="buttoKun">Butto-kun</button>
  <div v-if="show && testResultData">
    <p>Data for {{ inputText }}</p>
    <span>{{ testResultData.title.romaji }}</span>
  </div>
</template>
