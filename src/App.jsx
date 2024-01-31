import { useState } from 'react'
import Header from './components/Header';
import ItenListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header /> 
      <ItenListContainer/>
    </div>
  )
}

export default App
