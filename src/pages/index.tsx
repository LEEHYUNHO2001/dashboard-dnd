import type { NextPage } from 'next';

import { Dashboard } from '@/components';
import { useEventQuery } from '@/hooks/query';

const Home: NextPage = () => {
  const { isLoading, isFetching } = useEventQuery(1, 'summary');

  if (isLoading || isFetching) return <div>Loading...</div>;

  return <Dashboard />;
};

export default Home;
