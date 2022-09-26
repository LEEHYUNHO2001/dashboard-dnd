import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { setSummary } from '@/store/modules/summaryData';
import { getEventData } from '@/utils/fetcher';

// GET Event Endpoint
export const useEventQuery = (eventNum: number) => {
  const url = `/api/event_${eventNum}.json`;
  const dispatch = useDispatch();
  return useQuery(['getEventData', eventNum], () => getEventData(url), {
    onSuccess: data => {
      const summary = data?.data.data;
      dispatch(setSummary({ headers: summary.headers, rows: summary.rows }));
    },
  });
};
