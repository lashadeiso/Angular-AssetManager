import { SelDevFromStorage } from '../selDevFromStorage.interface';

export interface AllSelDevFromStorageRFAPI {
  statusCode: number;
  message: string;
  content: SelDevFromStorage[];
}
