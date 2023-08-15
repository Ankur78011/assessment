
import { useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home';
import FormModal from './components/FormModal';


function App() {
  return (
    <div className="App">
  
    {useSelector((state)=>state.form.showModal)&&<FormModal></FormModal>}
   
       <Home></Home>
    </div>
  );
}

export default App;
