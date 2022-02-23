import React,{FC} from 'react';
import '../header/Header.css'

export interface IAppProps {
}

const Header:FC = (props: IAppProps)=> {
  return (
    <div className='container'>
      <span>Pomodoro Timer</span>
    </div>
  );
}

export default Header
