import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import { Toaster } from "react-hot-toast"

// Components 
import Header from './components/header/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

// Authentication
import { useAuth } from './context/AuthProvider'
// import Login from './pages/auth/Login'
// import Registration from './pages/auth/Registration'
const Login = lazy(() => import('./pages/auth/Login'))
const Registration = lazy(() => import('./pages/auth/Registration'))


//pages
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Course from './pages/Course'
// import Doubt from './pages/Doubt'
import Profile from './pages/Profile'
import Dashboard from './pages/dashboard/Dashboard'
import InnerDashboard from './pages/dashboard/InnerDashboard'
import Account from './pages/dashboard/Account'
import DoubtQue from './pages/dashboard/DoubtQue'
import Setting from './pages/dashboard/Setting'
import Construct from './pages/Construct'

function App() {

  const [loading, setLoading] = useState();
  const [authUser, setAuthUser] = useAuth();
  setAuthUser(authUser)

  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          <Route path={'/*'} element={<Error />} />
          <Route path={'/construction'} element={<Construct />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/course"} element={<Course />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/profile"} element={authUser ? <Profile /> : <Navigate to={'/register'} />} />
          <Route path={"/login"} element={!authUser ? <Login /> : <Navigate to={'/'} />} />
          <Route path={"/register"} element={!authUser ? <Registration /> : <Navigate to={'/'} />} />

          <Route path={"/dashboard"}
            element={authUser ? <Dashboard />
              : <Navigate to={'/register'} />} >
            <Route path='' element={<InnerDashboard />} />
            <Route path='account' element={<Account />} />
            <Route path='doubt' element={<DoubtQue />} />
            <Route path='setting' element={<Setting />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
      <Toaster />
    </BrowserRouter>
  )
}

export default App
