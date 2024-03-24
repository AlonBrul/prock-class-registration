import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import User from '../User';

function HomePage() {
  return (
    <>
      <div className="dashboard">
        <User />
        <button className="menu-btn fa-solid fa-bars"></button>
      </div>
      <ul className='preview-navigation'>
        <li> <Link to={'/'} className='preview-item'> Day </Link> </li>
        <li> <Link to={'/week'} className='preview-item'> Week </Link> </li>
        <li> <Link to={'/month'} className='preview-item'> Month </Link> </li>
      </ul>
      <Outlet />
    </>
  );
}

export default HomePage;