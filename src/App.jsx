/**********************
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cloudflareLogo from './assets/Cloudflare_Logo.svg'
import './App.css'
**********************/
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {

  return (
    <>

    <ApiReferenceReact
      configuration={{
        url: 'https://practice-davinci-838522938854.us-central1.run.app/docs/',
      }}
    />

    </>
  )
}

export default App

