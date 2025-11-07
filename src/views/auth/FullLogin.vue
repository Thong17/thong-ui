<template>
  <h1>{{ $t(route.meta.title ?? '') }}</h1>
  <button @click="handleLogin">{{ $t('login') }}</button>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'

  const route = useRoute()
  const router = useRouter()
  const auth = useAuthStore()

  const handleLogin = async () => {
    try {
      await auth.login('test', {
        email: 'test@gmail.com',
        id: '1111',
        name: 'Thong',
      })
      const query = route.query as { redirect?: string }
      if (!query.redirect) return router.push({ name: 'Overview' })
      router.push({ path: query.redirect })
    } catch (e) {
      console.log(e)
    }
  }
</script>
