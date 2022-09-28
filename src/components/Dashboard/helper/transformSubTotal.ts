/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
export const transformSubTotal = (datas: string[][]) => {
  const newSubTotal = datas.reduce((map, obj) => {
    // country ect 처리
    if (!obj[0]) {
      map.ect = map.ect ? map.ect + parseInt(obj[3], 10) : parseInt(obj[3], 10);

      // 객체에 country 없는 경우
    } else if (!map[obj[0]]) {
      // country 초기화, region ect 처리
      // ex: { kr: { countrySum:119, seoul: { regionSum:119, city:['guro-gu', 119] } } }
      const num = parseInt(obj[3], 10);
      map[obj[0]] = obj[1]
        ? { countrySum: num, [obj[1]]: { regrionSum: num, city: [[obj[2], num]] } }
        : { countrySum: num, ect: num };

      // 객체에 country는 있는 경우
    } else {
      const num = parseInt(obj[3], 10);

      // country가 있으면 countrySum부터 계산
      map[obj[0]].countrySum += num;

      // region ect 처리
      if (!obj[1]) {
        map[obj[0]].ect = 0;
        map[obj[0]].ect = map[obj[0]].ect ? map[obj[0]].ect + num : num;

        // 객체에 region 존재하는지 판단 후 로직 수행
      } else if (!map[obj[0]][obj[1]]) {
        map[obj[0]][obj[1]] = { regrionSum: num, city: [[obj[2], num]] };
      } else {
        // region이 있으면 regrionSum부터 계산
        map[obj[0]][obj[1]].regrionSum += num;

        // city ect 처리
        map[obj[0]][obj[1]].city = obj[2]
          ? [...map[obj[0]][obj[1]].city, [obj[2], num]]
          : [...map[obj[0]][obj[1]].city, ['ect', num]];
      }
    }
    return map;
  }, Object.create(null));
  return newSubTotal;
};
