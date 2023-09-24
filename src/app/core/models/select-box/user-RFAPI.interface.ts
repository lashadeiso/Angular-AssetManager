export interface UserRFAPI {
  statusCode: number;
  message: string;
  content: {
    user: string[];
  };
}
