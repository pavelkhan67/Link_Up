
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer />

    </div>
  )
}

export default App
