import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { setSummary } from '@/store/modules/summaryData';
import { getEventData } from '@/utils/fetcher';

// GET Event Endpoint
export const useEventQuery = (eventNum: number, type = '') => {
  const url = `/api/event_${eventNum}.json`;
  const dispatch = useDispatch();
  return useQuery(['getEventData', eventNum], () => getEventData(url), {
    onSuccess: data => {
      if (type === 'summary') {
        const summary = data?.data.data;
        const sortRows = summary.rows.sort(
          (a: string[], b: string[]) => +new Date(b[0]) - +new Date(a[0])
        );
        dispatch(setSummary({ headers: summary.headers, rows: sortRows }));
      }
    },
  });
};
