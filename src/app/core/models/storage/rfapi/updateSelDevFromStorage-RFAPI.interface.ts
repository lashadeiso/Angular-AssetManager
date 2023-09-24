import { SelDevFromStorage } from '../selDevFromStorage.interface';

export interface UpdateSelDevFromStorageRFAPI {
  statusCode: number;
  message: string;
  content: SelDevFromStorage;
}
