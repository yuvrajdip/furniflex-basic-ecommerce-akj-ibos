import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRockingChair from './SingleRockingChair';

const SideChair = () => {
  const sideChairs = useLoaderData();
  console.log(sideChairs);

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-3">
      {
        Array.isArray(sideChairs) && sideChairs.map( sideChair=><SingleRockingChair
          key={sideChair.id}
          rockingChair={sideChair}
        >
        </SingleRockingChair>)
      }
    </div>
  );
};

export default SideChair;