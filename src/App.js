import './App.css';
import Logs from './Components/Logger/Logger';
import Wrapper from './Components/Wrapper/Wrapper';
function App(){
return(
  <div className='LifeLoopComponent'>
    <Wrapper/>
    <Logs/>
  </div>
)
}
export default App;