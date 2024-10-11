 import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
function Counter() {
  let [count, setCount] = useState(0)
  useEffect(()=> {
    console.log('Компонент змонтувався')
  }, [])
  return (
    <div className="App">
      <h1>First component</h1>
      <Card variant="outlined" sx={{display: 'flex', flexDirection: 'column', padding: '10px 20px', alignItems: 'center'}}>
        <p>{count}</p>
        <Button variant="text" className="button" onClick={()=> setCount(++count)}>increase</Button>
        <Button variant="text" className="button" onClick={()=> setCount(--count)}>decrease</Button>
        <Button variant="outlined" onClick={()=> setCount(0)}>Reset</Button>
      </Card>
    </div>
  );
}
export default Counter;
