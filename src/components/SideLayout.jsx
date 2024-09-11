import { NavLink } from 'react-router-dom';

const SideLayout = () => {

  return (
    <div>
      <div className='h-full flex flex-col items-center p-5'>
        <NavLink
          className={({ isActive }) => (isActive ? 'btn mt-4 p-5 font-bold bg-black text-white' : 'inactive btn mt-4 p-5 font-bold')}
          to="/homestore/rockingchairs"
        >
          Rocking Chair

        </NavLink>

        <NavLink
          to="/homestore/sidechairs"
          className={({ isActive }) => (isActive ? 'btn mt-4 p-5 font-bold bg-black text-white' : 'inactive btn mt-4 p-5 font-bold')}
        >
          Side Chairs
        </NavLink>
        <NavLink
          to="/homestore/loungechairs"
          className={({ isActive }) => (isActive ? 'btn mt-4 p-5 font-bold bg-black text-white' : 'inactive btn mt-4 p-5 font-bold')}
        >
          Lounge Chairs
        </NavLink>
      </div>
    </div>
  );
};

export default SideLayout;