import {dataset as data} from '../dataset';
import {useState,useEffect} from 'react';
import InfoVuelo from './components/InfoVuelo'

function App() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    setInfo(data)
  
  }, [])
  

  return (
   <div>
    <h1>¡Vuela ya mismo con Flybondi!</h1>
    <InfoVuelo info={info}/>
   </div>
  )
}

export default App
