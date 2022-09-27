export interface SummaryHeader {
  idx: number;
  key: string;
  label: string;
  description: string;
  property_type: string;
  value_type: string;
}

export interface ActionSummaryPayload {
  headers: SummaryHeader[];
  rows: string[][];
}

export interface SummaryData {
  summaryData: ActionSummaryPayload;
}
