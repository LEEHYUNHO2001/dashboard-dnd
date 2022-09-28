import { createContext } from 'react';

export interface SubTotalContext {
  sortNum: number;
}

export const SubTotalContext = createContext<SubTotalContext>({ sortNum: 1 });
