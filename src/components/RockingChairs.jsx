import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRockingChair from './SingleRockingChair';

const RockingChairs = () => {

  const rockingChairs = useLoaderData();
  console.log(rockingChairs);

  return (
  
    <div className="grid grid-rows-3 grid-cols-3 gap-3">
      {
        Array.isArray( rockingChairs ) && rockingChairs.map( rockingChair=><SingleRockingChair
          key={rockingChair.id}
          rockingChair={rockingChair}
        >
        </SingleRockingChair>)
      }
    </div>
  );
};

export default RockingChairs;