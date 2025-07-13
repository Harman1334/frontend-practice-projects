
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Services from "./components/Services"
import Layout from "./components/Layout/Layout"



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
      
        <Route path="services" element={<Services/>}/>
        </Route>
        
       
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
