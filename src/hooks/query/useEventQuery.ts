import { useQuery } from 'react-query';

import { getEventData } from '@/utils/fetcher';

// GET Event Endpoint
export const useEventQuery = (eventNum: number) => {
  const url = `/api/event_${eventNum}.json`;
  return useQuery(['getEventData', eventNum], () => getEventData(url));
};
