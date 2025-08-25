import { createApiClientApp } from '@/App'

await createApiClientApp(document.getElementById('scalar-client'), {
  url: 'https://practice-davinci-838522938854.us-central1.run.app/docs/',
  proxyUrl: 'https://proxy.scalar.com',
})
