import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
function Counter() {
  let [count, setCount] = useState(0)
  const date = new Date()
  useEffect(()=> {
    console.log('Компонент змонтувався' + date.toISOString())
    console.log('Компонент оновився' + date.toISOString())
    return function unMount(){
      console.log('Я розмонтувався'+ date.toISOString())
    }
  }, [count])
  function deleteComp(e){
      e.preventDefault()
  }
  return (
    <div className="App">
      <h1>First component</h1>
      <Card variant="outlined" sx={{display: 'flex', flexDirection: 'column', padding: '10px 20px', alignItems: 'center'}}>
        <p>{count}</p>
        <Button variant="text" className="button" onClick={()=> setCount(++count)}>increase</Button>
        <Button variant="text" className="button" onClick={()=> setCount(--count)}>decrease</Button>
        <Button variant="outlined" onClick={()=> setCount(0)}>Reset</Button>
        <button style={{marginTop: '20px', padding: '10px 20px', background: 'grey'}} onClick={deleteComp}>Hide component</button>
      </Card>
    </div>
  );
}
export default Counter;
