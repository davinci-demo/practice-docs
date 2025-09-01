import openapiURL from './assets/openapi.json?url'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {

  return (
    <>

    <ApiReferenceReact
      configuration={{
        url: openapiURL,
        baseServerURL: 'https://practice-davinci-838522938854.us-central1.run.app',
        servers: [
          {
            url: 'https://practice-davinci-838522938854.us-central1.run.app',
            description: 'Development',
          },
        ]
      }}
    />

    </>
  )
}

export default App

