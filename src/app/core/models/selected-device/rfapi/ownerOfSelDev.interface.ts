import { SelDeviceData } from '../selDeviceData.interface';

export interface OwnerOfSelDev {
  statusCode: number;
  message: string;
  content: SelDeviceData;
}
