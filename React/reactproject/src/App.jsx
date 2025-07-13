import { BrowserRouter, Route, Routes } from "react-router-dom"
import Game from "./component/Game"


function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="game" element={<Game/>}/>

  </Routes>
  </BrowserRouter>
  
    </> 
  )
  
      
}

export default App
