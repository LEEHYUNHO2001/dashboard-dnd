import { GridLayoutType } from '@/types';

interface Obj {
  [key: string]: GridLayoutType[];
}

export const getStorage = (key: string) => {
  let obj: Obj = {};
  if (localStorage) {
    try {
      const storage = localStorage.getItem('dashboard_rgl')!;
      obj = JSON.parse(storage) || {};
    } catch (err) {
      console.log(err);
    }
  }
  return obj[key];
};
