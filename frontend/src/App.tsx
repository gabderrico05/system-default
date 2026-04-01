import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

function App() {
  return (
    <div className='w-screen h-screen bg-stone-900'>
      <RouterProvider router={router}/>
    </div>
    
  )
}

export default App
 