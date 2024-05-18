import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { TestService } from '@/service'

export const useTestStore = defineStore('test', () => {
  const count = ref(0)
  const remoteCount = ref(0)

  const countSum = computed(() => count.value + remoteCount.value)

  function increment() {
    console.log('increment', count.value)
    count.value++
  }

  async function incrementRemote() {
    remoteCount.value = await TestService.increaseRemote()
    console.log('incrementRemote', remoteCount.value)
  }

  const testText = ref('Undefined')
  async function fetchText() {
    testText.value = await TestService.fetchText("Hello World")
  }

  async function triggerError(errorCode: number) {
    return await TestService.triggerError(errorCode)
  }

  return {
    count, remoteCount, countSum, increment, incrementRemote,
    testText, fetchText,
    triggerError
  }
})
