export interface SignInRFAPI {
  message: string;
  statusCode: number;
  content: {
    accessToken: string;
  };
}
