import { SelDevFromStorage } from '../selDevFromStorage.interface';

export interface EditSelDevFromStorageRFAPI {
  statusCode: number;
  message: string;
  content: SelDevFromStorage;
}
