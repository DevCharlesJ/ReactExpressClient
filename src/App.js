import logo from './logo.svg';
import styles from './App.module.css';
import Sidebar from './components/base/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChatApp from './routes/ChatApp';

function App() {
  return (
    
    <Router>
      <div id={styles['page-wrapper']}>
      <Sidebar/>
      <Routes>
        {/* <Route exact path='/' component={ChatApp}/> */}
        <Route path='/ChatApp' element={<ChatApp />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
