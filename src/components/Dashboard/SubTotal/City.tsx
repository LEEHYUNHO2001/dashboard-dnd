import { ItemList } from '.';

interface Props {
  city: string;
  num: number;
}

export const City = ({ city, num }: Props) => (
  <ItemList title={city} sum={num} count={0} titleLeft={50} />
);
