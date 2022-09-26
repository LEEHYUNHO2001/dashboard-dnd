import { SummaryHeader } from '@/types';

export const summaryIdx = (headers: SummaryHeader[], key: string) =>
  headers.filter(header => header.key === key)[0].idx;
