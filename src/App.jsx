import { useState } from 'react'
import Header from './components/Header';
import ItenListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <ItenListContainer/>
    </>
  )
}

export default App
