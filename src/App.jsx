import { useState } from 'react'
import Section from './Components/Section'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ride from './Components/Ride';
import Food from './Components/Food';
import Addres from './Components/Addres';
import Login from './Components/Login';
import Register from './Components/Register';
import Faq from './Components/Faq';
import Restollogin from './Components/Restollogin';
import Managementre from './Components/Managementre';
import Driverregister from './Components/Driverregister';
import Driverslogin from './Components/Driverslogin';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Section></Section>
  },
  {
    path: "/rideboking",
    element: <Ride></Ride>
  },
  {
    path: "/makereservation",
    element: <Food></Food>
  },
  {
    path: "/addres",
    element: <Addres></Addres>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/Register",
    element: <Register></Register>
  },
  {
    path: "/faq",
    element: <Faq></Faq>
  },
  {
    path: "/restologin",
    element: <Restollogin/>
  },
  {
    path: "/managementre",
    element: <Managementre></Managementre>
  },
  {
    path: "/driversregistation",
    element: <Driverregister/>
  },
  
  {
    path: "/driverslogin",
    element: <Driverslogin/>
  },


]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App;
