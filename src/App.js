import { useState } from 'react';
import { Button } from '@mui/material';
import './App.css';
import Logs from './Components/Logger/Logger';
import Counter from './Components/Counter/Counter'
function App(){
  const [component, setComponent] = useState([])
  const [content, setContent] = useState([])
  const newComponent = [...component]
  const addComponent = () =>{
    setComponent([newComponent, <Counter key={component.length} onButtonClick={handleButtonClick}/>])
  }
  const handleButtonClick = (newContent) => {
    setContent([...content,newContent]);
  };
return(
  <div className='LifeLoopComponent'>
    <Button variant="contained" onClick={addComponent}>Add component</Button>
    <div>{component.map(component => component)}</div>
    <Logs content={content}/>
  </div>
)
}
export default App;