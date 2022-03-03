import { Route, Routes, Navigate } from 'react-router-dom'
import MicroNg from '../pages/microNg'
import MicroReact from '../pages/microReact'

const Routers = () => {
  return (
    <Routes>
      <Route path='/microNg/*' element={<MicroNg />} />
      <Route path='/microReact/*' element={<MicroReact />} />
      <Route path='/' element={<Navigate to='/microReact' />} />
    </Routes>
  )
}

export default Routers