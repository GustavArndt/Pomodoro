import React,{FC} from 'react';
import Header from './components/header/Header';
import './App.css'
import Body from './components/body/body';


const App:FC=()=> {
  return (
    <div className='app'>
      <div className='header'><Header/></div>
      <div className='body'><Body/></div>
    </div>
  );
}

export default App
