import { UserData } from '../userData.interface';

export interface GetAllUsersResponceRFAPI {
  message: string;
  statusCode: number;
  content: UserData[];
}
