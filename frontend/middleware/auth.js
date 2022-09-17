export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth()

  if (!auth.value.isAuthenticated) {
    return navigateTo("/");
  }
});
