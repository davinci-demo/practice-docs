import { ApiReferenceReact } from '@scalar/api-reference-react'

import '@scalar/api-reference-react/style.css'

function scalarclient() {
  return (
    <ApiReferenceReact
      configuration={{
        url: 'https://practice-davinci-838522938854.us-central1.run.app/docs/',
      }}
    />
  )
}

export default scalarclient

