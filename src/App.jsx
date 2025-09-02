import openapiURL from './assets/openapi.json?url'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {

  return (
    <>

    <ApiReferenceReact
      configuration={{
        persistAuth: true,
        url: openapiURL,
        proxyUrl: 'https://proxy.scalar.com',
        baseServerURL: import.meta.env.VITE_ORIGIN_URL,
        servers: [
          {
            url: import.meta.env.VITE_ORIGIN_URL,
            description: 'Development',
          },
        ]
      }}
    />

    </>
  )
}

export default App

