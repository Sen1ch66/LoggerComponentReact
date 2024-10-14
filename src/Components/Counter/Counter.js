import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
function Counter({onButtonClick}) {
  let [count, setCount] = useState(0)
  const date = new Date().toISOString()
  useEffect(()=> {
    console.log('Компонент змонтувався' + date)
  }, [])
  const LogAndIncrease = () =>{
      onButtonClick('Я оновився' + date)
      setCount(++count)
  }
  const LogAndDecrease = () =>{
    onButtonClick('Я оновився' + date)
    setCount(--count)
  }
  return (
    <div className="App">
      <h1>First component</h1>
      <Card variant="outlined" sx={{display: 'flex', flexDirection: 'column', padding: '10px 20px', alignItems: 'center'}}>
        <p>{count}</p>
        <Button variant="text" className="button" onClick={LogAndIncrease}>increase</Button>
        <Button variant="text" className="button" onClick={LogAndDecrease}>decrease</Button>
        <Button variant="outlined" onClick={()=> setCount(0)}>Reset</Button>
        <button style={{marginTop: '20px', padding: '10px 20px', background: 'grey'}}>Hide component</button>
      </Card>
    </div>
  );
}
export default Counter;
