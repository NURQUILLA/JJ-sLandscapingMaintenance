import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Reviews from './routes/Reviews.jsx'
import Quotes from './routes/Quotes.jsx'
import Services from './routes/Services.jsx'

const router = createBrowserRouter([

  {path: '/*', element:<App />},
  {path: '/services', element:<Services />},
  {path: '/reviews', element:<Reviews />},
  {path: '/quotes', element:<Quotes />}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
