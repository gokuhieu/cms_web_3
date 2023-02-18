
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Idea from './components/Idea';
import View from './components/View';
import AddTopic from './components/Addtopic';
import Topic from './components/Topic';
import Home from './components/Home';
import Footer from './components/Footer';
import Notification from './components/Notification';
import Addcategory from './components/Addcategory';
import Addidea from './components/Addidea';


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
          <Route path='home' element={<Home />} />
          <Route path='notification' element={<Notification />} />
          <Route path='addcategory' element={<Addcategory />} />
          <Route path='addidea' element={<Addidea />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>

  
  );
}

export default App;
