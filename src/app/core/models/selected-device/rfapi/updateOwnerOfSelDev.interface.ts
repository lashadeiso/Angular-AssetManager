import { SelDeviceData } from "../selDeviceData.interface";

export interface UpdateOwnerOfSelDev {
  statusCode: number;
  message: string;
  content: SelDeviceData;
}
