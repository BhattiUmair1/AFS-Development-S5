<template>
    <div class="uppercase text-red-600">Account</div>
  </template>
  
<script setup lang="ts">
    import useAuthentication from '../composables/useAuthentication';
    const { user } = useAuthentication()
</script>
  
  