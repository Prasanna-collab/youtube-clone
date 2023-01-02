
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Video from './Video';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-display d-flex active">
      <SideBar/>
      <Video/>
      </div>
    </div>
  );
}

export default App;
