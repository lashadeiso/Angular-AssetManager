export interface ModelRFAPI {
  statusCode: number;
  message: string;
  content: {
    model: string[];
  };
}
