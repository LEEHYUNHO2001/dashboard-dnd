import { GridLayoutType } from '@/types';

export const setStorage = (key: string, value: GridLayoutType[]) => {
  if (localStorage) {
    localStorage.setItem(
      'dashboard_rgl',
      JSON.stringify({
        [key]: value,
      })
    );
  }
};
