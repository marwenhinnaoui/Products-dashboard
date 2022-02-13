
import './App.css';
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Add from './Components/add';
import Edit from './Components/edit';
function App() {
  return (
    <BrowserRouter>
      <div className='Container row p-0'>
        <div className='col-2'>
          <Sidebar />
        </div>
        <div className='h-100 col-10'>
      <Routes>
        <Route path="/" exact element={<Content />}/>
        <Route path="/add" exact element={<Add />}/>
        <Route path="/edit/:id" exact element={<Edit />}/>
      </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
