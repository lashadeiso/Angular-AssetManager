export interface ChangePasswordRFAPI {
  statusCode: number;
  message: string;
  content: {
    accessToken: string;
  };
}
