import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux';
import store from './store/index.js';

import CategoryList from './components/CategoryList.js';
import ActiveCategory from './components/ActiveCategory.js' 

import Navbar from './components/AppBar/Navbar.js';




function App() {

  return (
    <Provider store={store} >
      <div style={{
        background:"url('https://cutewallpaper.org/21/black-gif-background/Pin-on-Super-gif.gif')",
        height:'1100px'
        }}
      >

        <Navbar/> 
      <div className="App">
        <CategoryList/>

      </div>
      <div 
      style={{
        display: 'flex', 
        justifyContent:'center', 
        marginTop:'5%'
      }}
      >
        <ActiveCategory/> 
      </div>
      </div>

    </Provider>  
  );
}

export default App;
