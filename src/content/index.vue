<script setup lang="ts">
import { ref } from 'vue'
import { homePage } from '../../package.json'
import BaseIcon from '../components/BaseIcon.vue'
import 'virtual:windi.css'

const show = ref(false)
const doc = ref('')

function changeShow() {
  if (!show.value) {
    document.body.style.overflow = 'hidden'
    changeDoc()
    show.value = true
  } else {
    document.body.style.overflow = 'auto'
    show.value = false
  }
}

function changeDoc() {
  const body = document.getElementsByClassName('body')?.[0]
  if (body.innerHTML) {
    doc.value = body.innerHTML
  }
}
</script>

<template>
  <div
    :w:pos="show ? `fixed top-0 left-0 right-0` : 'fixed left-0 right-0 bottom-0'"
    w:flex="~ center"
    w:justify="center"
    w:align="items-center"
    w:bg="green-500 hover:green-400"
    w:text="white"
    w:h="20px"
    w:cursor="pointer"
    w:transition="~ duration-300 ease-in-out"
    w:z="2"
    @click="changeShow"
  >
    <BaseIcon :w:transform="show ? '' : '~ rotate-180'" w:transition="~ duration-300 ease-in-out" icon="toggle" />
  </div>
  <Transition name="bounce">
    <div v-if="show" w:pos="fixed top-0 right-0 bottom-0 left-0" w:p="t-20px b-40px" w:bg="white" w:overflow="y-auto">
      <div w:m="y-0 x-auto" w:w="800px">
        <div class="markdown-body">
          <div v-html="doc"></div>
        </div>
      </div>
      <a
        w:pos="fixed bottom-200px right-80px"
        w:text="hover:no-underline visited:black"
        :href="homePage"
        rel="noopen noreferrer"
        target="_blank"
      >
        <BaseIcon w:text="!30px" icon="github" />
      </a>
    </div>
  </Transition>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<style>
.headerlink {
  display: none;
}
</style>
