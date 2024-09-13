import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Layout from './layout.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './Github/Github.jsx'



const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:'',element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"user/:userid",
                element:<User/>
            },
            {
                path:"/github",
                element:<Github/>
            },

            
        ]
    }
])
createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
)
