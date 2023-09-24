import { UserData } from '../userData.interface';

export interface SingleUserRFAPI {
  statusCode: number;
  message: string;
  content: UserData;
}
