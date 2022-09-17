// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/axios'
    ],
    axios: {
        baseURL: 'http://localhost:8000'
    },
    plugins: [
        '~/plugins/axios'
    ],
    css: ["assets/css/main.css"],
    meta: {
        title: "Nuxt3 - Admin Panel"
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            }
        },
    }
})
