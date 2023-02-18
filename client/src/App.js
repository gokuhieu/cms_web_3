
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Idea from './components/Idea';
import View from './components/View';
import AddTopic from './components/Addtopic';
import Topic from './components/Topic';
function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Navbar />} />
          <Route path='login' element={<Login />} />
          <Route path='idea' element={<Idea />} />
          <Route path='view' element={<View />} />
          <Route path='addtopic' element={<AddTopic />} />
          <Route path='topic' element={<Topic />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>

  
  );
}

export default App;
