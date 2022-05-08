import { ref } from 'vue'

export function useLoading(value = false, duration: number = 500) {
  const loading = ref(value)
  const lock = ref(value)
  let timer: NodeJS.Timeout
  function startLoading() {
    loading.value = true
    lock.value = true
    clearTimeout(timer)
    setTimeout(() => {
      lock.value = false
      stopLoading()
    }, duration)
  }
  function stopLoading() {
    if (lock.value) {
      return
    }
    loading.value = false
  }
  return {
    loading,
    startLoading,
    stopLoading
  }
}
