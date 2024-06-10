import { User } from 'lucide-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import Appointment from './Admin/Appointment'
import Dashboard from './Admin/Dashboard'
import Pation from './Admin/Pation'
import Users from './Admin/Users'
import AppointmentUser from './User/Appointment'
import UserLayout from './UserLayout'
import './App.css'
import SignIn from './login/SignIn'
import SignUp from './login/SignUp'
import LandingPage from './User/LandingPage'
import Contact from './User/Contact'



function App() {

  return (
    <>

      <BrowserRouter>
        {/* <SignUp /> */}
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/admin' element={<Admin />}>
            <Route path='' element={<Dashboard />} />
            <Route path='appointment' element={<Appointment />} />
            <Route path='users' element={<Users />} />
            <Route path='pation' element={<Pation />} />
          </Route>
          <Route path='/userlayout' element={<UserLayout />}>
            <Route path='' element={<LandingPage />} />
            <Route path='appointmentuser' element={<AppointmentUser />} />
            <Route path='contact' element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
