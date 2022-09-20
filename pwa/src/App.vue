<template>
  <!-- <div class="uppercase text-red-600"> -->
  <RouterView></RouterView>
  <!-- </div> -->
</template>

<script lang="ts">
import useFirebase from './composables/useFirebase'
export default {
  setup() {
    const { app } = useFirebase()
    console.log(app)
  },
}
</script>
