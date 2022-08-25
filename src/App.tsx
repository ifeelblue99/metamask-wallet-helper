import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoadingAnim, { LoadingAnimStyleType } from './components/loading-anim/LoadingAnim'

const LoginPage = lazy(() => import("./pages/login/LoginPage"))
const WalletPage = lazy(() => import("./pages/wallet/WalletPage"))



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingAnim message='Loading...' loaderStyle={LoadingAnimStyleType.FullScreen} />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/wallet/:walletAddress" element={<WalletPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
