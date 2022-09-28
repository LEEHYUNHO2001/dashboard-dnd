import React, { useEffect, useState } from 'react';

import { SubTotalData } from '@/types';

import { ItemList, Region } from '.';

interface Props {
  rest: { [key: string]: object } | number;
  country: string;
  countrySum: number;
  countryCount: number;
}

export const Country = ({ country, rest, countrySum, countryCount }: Props) => {
  const [region, setRegion] = useState<SubTotalData[]>();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prev => !prev);
  };

  useEffect(() => {
    const EntriesRest = Object.entries(rest).filter(
      data => data[0] !== 'countrySum' && data[0] !== 'countryCount'
    );
    setRegion(EntriesRest);
  }, []);

  return (
    <li>
      <ItemList
        title={country}
        sum={countrySum}
        count={countryCount}
        click={click}
        handleClick={handleClick}
      />
      {click && (
        <ul>
          {region?.map(data => {
            const [regionText, regionRest] = data;
            const isEct = typeof regionRest === 'number';
            const regionSum = isEct ? regionRest : regionRest.regionSum;
            const regionCount = isEct ? 0 : regionRest.regionCount;

            return (
              <Region
                key={`Region-${regionText}-${regionSum}`}
                regionText={regionText}
                regionRest={regionRest}
                regionSum={regionSum as number}
                regionCount={regionCount as number}
                buttonLeft={10}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};
