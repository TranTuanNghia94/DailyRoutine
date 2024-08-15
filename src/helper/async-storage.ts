import moment from 'moment';
import {MMKV} from 'react-native-mmkv';

export const userKeyStorage = {
  today: moment().format('YYYY-MM-DD'),
  list: 'list',
};

export const convertJsonToString = (data: any) => {
  return JSON.stringify(data);
};

export const convertStringToJson = (data: string) => {
  return JSON.parse(data);
};

export const userStorage = new MMKV();
