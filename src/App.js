import { useState } from 'react';
import { Button } from '@mui/material';
import './App.css';
import Logs from './Components/Logger/Logger';
import Wrapper from './Components/Wrapper/Wrapper';
function App(){
  const [component, setComponent] = useState([])
  const newComponent = [...component]
  const addComponent = () =>{
    
  }
return(
  <div className='LifeLoopComponent'>
    <Wrapper/>
    <Button variant="contained">Contained</Button>
    <Logs/>
  </div>
)
}
export default App;