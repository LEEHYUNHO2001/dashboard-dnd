import { useEffect, useState } from 'react';

import { ItemList } from '.';

interface Props {
  regionText: string;
  regionRest: { [key: string]: object } | number;
  regionSum: number;
  regionCount: number;
  buttonLeft?: number;
}

export const Region = ({ regionText, regionRest, regionSum, regionCount, buttonLeft }: Props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prev => !prev);
  };

  useEffect(() => {
    console.log(regionRest);
  }, []);

  return (
    <ItemList
      title={regionText}
      sum={regionSum}
      count={regionCount}
      click={click}
      handleClick={handleClick}
      buttonLeft={buttonLeft}
    />
  );
};
