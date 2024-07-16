import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import NavBar from './components/NavBar'
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer'

function App() {
  return (
    <>
      <NavBar/>
      <Itemlistcontainer saludo ={"Hola che!"} />
    </>
  )
}

export default App
