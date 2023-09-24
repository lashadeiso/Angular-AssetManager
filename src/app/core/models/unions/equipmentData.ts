import { UserData } from 'src/app/core/models/users/userData.interface';
import { SelDevFromStorage } from '../storage/selDevFromStorage.interface';
import { SelDeviceData } from '../selected-device/selDeviceData.interface';

export type EquipmentData = UserData | SelDeviceData | SelDevFromStorage;
