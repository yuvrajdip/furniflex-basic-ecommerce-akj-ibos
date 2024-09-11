import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRockingChair from './SingleRockingChair';

const LoungeChair = () => {
  const loungeChairs = useLoaderData();
  console.log(loungeChairs);

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-3">
      {
        Array.isArray(loungeChairs) && loungeChairs.map(
          sideChair =>
            <SingleRockingChair
              key={sideChair.id}
              rockingChair={sideChair}
            >
            </SingleRockingChair>
        )
      }
    </div>
  );
};

export default LoungeChair;