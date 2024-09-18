
import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MainScreen from './mainScreen';
import ModalForm from './modalForm';
// Importing Bootstrap CSS in index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className='App'>
      <MainScreen/>
      {/* <ModalForm/> */}
    </div>
  );
}

export default App;
