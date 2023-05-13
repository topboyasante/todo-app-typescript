import React from 'react'
import Navbar from './assets/Navbar'
import Todolist from './assets/Todolist'

const App : React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Todolist/>
    </div>
  )
}

export default App