<template>
  <div>
    <form @submit.prevent="">
      <header class="mb-3">
        <h2 class="text-7">Login</h2>
      </header>
      <div
        v-if="errorMessage"
        class="rounded-mb mb-3 flex items-center justify-between border-red-500 bg-red-100 px-3 py-3"
      >
        <p class="text-sm text-red-600">{{ errorMessage }}</p>
        <button
          class="rounded-full border-2 border-red-100 p-2 outline-none hover:bg-red-200 active:border-red-600"
          @click="errorMessage = ''"
        >
          <X class="point text-red-600"></X>
        </button>
      </div>
      <div class="mt-3">
        <label for="email" class="mb-1 block focus-within:text-neutral-900">
          <span class="mb-1 block">email</span>
          <input
            type="email"
            class="rounded-mb w-full border border-neutral-200 px-3 py-1 text-neutral-800 outline-none ring-neutral-300 focus-visible:ring"
            id="email"
            autocomplete="email"
            v-model="userInput.email"
          />
        </label>
      </div>
      <div class="mt-3">
        <label for="password" class="mb-1 block focus-within:text-neutral-900">
          <span class="mb-1 block">password</span>
          <input
            type="password"
            class="rounded-mb w-full border border-neutral-200 px-3 py-1 text-neutral-800 outline-none ring-neutral-300 focus-visible:ring"
            id="password"
            v-model="userInput.password"
          />
        </label>
      </div>
      <button
        class="h-15 mt-6 flex w-full items-center justify-center rounded-md bg-neutral-700 py-2 px-3 text-white outline-none ring-neutral-300 hover:bg-neutral-800 active:bg-neutral-600"
        :disabled="loading"
        @click="submitForm"
      >
        <span v-if="!loading">Log in</span>
        <div v-else>
          <Loader2 class="animate-spin" />
        </div>
      </button>
      <p class="mt-3 text-center text-sm">
        <RouterLink
          to="/auth/register"
          class="rounded-md outline-none ring-neutral-300 hover:underline"
        >
          Not yet a member? Sign up
        </RouterLink>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref } from 'vue'
import { X, Loader2 } from 'lucide-vue-next'
import useAuthetication from '../../composables/useAuthentication'
export default defineComponent({
  components: {
    X,
    Loader2,
  },
  setup() {
    const { login } = useAuthetication()
    const errorMessage: Ref<string> = ref('Something went wrong')
    const loading: Ref = ref(false)
    const userInput = reactive({
      email: '',
      password: '',
    })

    const submitForm = () => {
      loading.value = true
      login(userInput.email, userInput.password)
        .then((user) => console.log(user))
        .catch((err) => console.log(err))
        .finally(() => (loading.value = false))
    }
    return {
      errorMessage,
      loading,
      userInput,
      submitForm,
    }
  },
})
</script>
