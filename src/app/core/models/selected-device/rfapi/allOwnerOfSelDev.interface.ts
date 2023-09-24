import { SelDeviceData } from '../selDeviceData.interface';

export interface AllOwnerOfSelDev {
  statusCode: number;
  message: string;
  content: SelDeviceData[];
  total: number;
}
