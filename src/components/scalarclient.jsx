import { ApiClientModalProvider } from '@scalar/api-client-react'
import '@scalar/api-client-react/style.css';
import { useApiClientModal } from '@scalar/api-client-react'

const client = useApiClientModal()

export default function scalarclient() {
  return (
  <ApiClientModalProvider
    configuration={{
      url: 'https://practice-davinci-838522938854.us-central1.run.app/docs/',
    }}>
    {children}
  </ApiClientModalProvider>
  <button onClick={() => client?.open({path: '/auth/token', method: 'get' })}>
  Click to open Api client
  </button>
)
}
