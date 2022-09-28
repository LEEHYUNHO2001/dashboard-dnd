import { useContext, useEffect, useState } from 'react';

import { City, ItemList } from '.';
import { SubTotalContext } from './Context';

type CityType = [string, number];

interface Props {
  regionText: string;
  regionRest: { [key: string]: object } | { city: CityType } | number;
  regionSum: number;
  regionCount: number;
  buttonLeft?: number;
}

export const Region = ({ regionText, regionRest, regionSum, regionCount, buttonLeft }: Props) => {
  const [cities, setCities] = useState<CityType[]>();
  const [click, setClick] = useState(false);
  const { sortNum } = useContext(SubTotalContext);

  const handleClick = () => {
    setClick(prev => !prev);
  };

  useEffect(() => {
    const isCity = typeof regionRest === 'number';
    const rest = !isCity && regionRest.city;

    const sortRest =
      rest &&
      (rest as [string, number][]).sort(
        (a: [string, number], b: [string, number]) => (b[1] - a[1]) * sortNum
      );
    setCities(sortRest as CityType[]);
  }, [sortNum]);

  return (
    <li>
      <ItemList
        title={regionText}
        sum={regionSum}
        count={regionCount}
        click={click}
        handleClick={handleClick}
        buttonLeft={buttonLeft}
      />
      {click && cities && (
        <ul>
          {cities.map(data => {
            const [city, num] = data;
            return <City key={`City-${city}-${num}`} city={city} num={num} />;
          })}
        </ul>
      )}
    </li>
  );
};
