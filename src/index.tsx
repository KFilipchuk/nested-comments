import React from 'react'
import ReactDOM from 'react-dom/client'
import useMockAdapter from './api/useMockAdapter'
import {App} from './components/App/App'
import {ToastContainer} from 'react-toastify'
import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const RootApp = () => {
  useMockAdapter()

  return (
    <>
      <App />
      <ToastContainer />
    </>
  )
}

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
)
