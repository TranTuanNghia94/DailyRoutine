import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

const ITEM_KEYS = {
  token: 'token',
  user: 'user',
}


const setItem = async (key: string, value: string) => {
  const res = await RNSecureStorage.setItem(key, value, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED,
  });

  return res;
};

const getItem = async (key: string) => {
    const res = await RNSecureStorage.getItem(key);
    
    return res;
}

const removeItem = async (key: string) => {
    const res = await RNSecureStorage.removeItem(key);

    return res;
}

const clear = async () => {
    const res = await RNSecureStorage.clear();

    return res;
}

export {setItem, getItem, removeItem, clear, ITEM_KEYS};