export interface ApiResponse {
  get: string;
  parameters: string[];
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: any[];
}
