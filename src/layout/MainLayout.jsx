import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;