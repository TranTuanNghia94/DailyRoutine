import {convertJsonToString, userStorage} from '../helper/async-storage';
import {TaskDto} from '../helper/interface';

export interface CommonFunctProps {
  keyData: string;
  id: string;
  dataTask?: TaskDto;
  data: TaskDto[];
  callBackFunc: (data: TaskDto[]) => void;
}

const updateDataStorage = (props: CommonFunctProps) => {
  const {id, keyData, dataTask, data, callBackFunc} = props;

  if (id && data) {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      const newTasks = [...data];
      newTasks[index] = {...newTasks[index], ...dataTask};
      callBackFunc(newTasks);
      const stringData = convertJsonToString(newTasks);
      userStorage.set(keyData, stringData);
    }
  }
};

const deleteDataStorage = (props: CommonFunctProps) => {
  const {id, keyData, data, callBackFunc} = props;

  if (id && data) {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      const newTasks = [...data];
      newTasks.splice(index, 1);
      callBackFunc(newTasks);
      const stringData = convertJsonToString(newTasks);
      userStorage.set(keyData, stringData);
    }
  }
};

export {updateDataStorage, deleteDataStorage};
