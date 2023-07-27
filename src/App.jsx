import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Planets from './pages/planets'
import Mission from './pages/mission'
import Characters from './pages/Characters'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}  />
        <Route path='/planets' element={ <Planets />} />
        <Route path='/missions' element={ <Mission />} />
        <Route path='/characters' element={ <Characters />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
