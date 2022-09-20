<template>
  <div>
    <form @submit.prevent="">
      <header>
        <h2>Register</h2>
      </header>
      <div
        v-if="errorMessage"
        class="rounded-mb mb-3 flex items-center justify-between border-red-500 bg-red-100 px-3 py-3"
      >
        <p class="text-sm text-red-600">{{ errorMessage }}</p>
        <button
          @click="errorMessage = ''"
          class=":hover-bg-red-600 rounded-full border-none bg-red-100 outline-none"
        >
          <X class="p-3"></X>
        </button>
      </div>
      <div>
        <label for="name" class="mb-1 block focus-within:text-neutral-900">
          <span class="mb-2 block">name</span>
          <input
            type="text"
            class="rounded-mb w-full border border-neutral-200 px-3 py-1 text-neutral-800 outline-none ring-neutral-300 focus-visible:ring"
            id="name"
          />
        </label>
      </div>
      <div class="mt-3">
        <label for="email" class="mb-1 block focus-within:text-neutral-900">
          <span class="mb-2 block">email</span>
          <input
            type="email"
            class="rounded-mb w-full border border-neutral-200 px-3 py-1 text-neutral-800 outline-none ring-neutral-300 focus-visible:ring"
            id="email"
            autocomplete="email"
          />
        </label>
      </div>

      <div class="mt-3">
        <label for="password" class="mb-1 block focus-within:text-neutral-900">
          <span class="mb-2 block">password</span>
          <input
            type="password"
            class="rounded-mb w-full border border-neutral-200 px-3 py-1 text-neutral-800 outline-none ring-neutral-300 focus-visible:ring"
            id="password"
          />
        </label>
      </div>
      <button
        class="justify-center-rounded-md mt-6 flex h-20 w-full items-center bg-neutral-700 py-2 px-3 text-white outline-none ring-neutral-300"
        :Disabled="loading"
      >
        <span v-if="true">Create account</span>
        <div v-else>
          <Loader2 class="animate-spin" />
        </div>
      </button>
      <p class="mt-3 text-center text-sm">
        <RouterLink
          to="/auth/login"
          class="rounded-md outline-none ring-neutral-300 hover:underline"
        >
          Already have an account?
        </RouterLink>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { X, Loader2 } from 'lucide-vue-next'
export default defineComponent({
  components: {
    X,
    Loader2,
  },
  setup() {
    const errorMessage: Ref<string> = ref('Something went wrong')
    const loading: Boolean = false
    return {
      errorMessage,
      loading,
    }
  },
})
</script>
