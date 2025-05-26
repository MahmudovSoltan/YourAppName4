import { MMKV } from "react-native-mmkv";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const storage = new MMKV();

// export const setItem = (key: string, value: any) => {
//   storage.set(key, value);
// };

// export const getItem = (key: string) => {
//   return storage.getString(key);
// };

// export const removeItem = (key: string) => {
//   storage.delete(key);
// };

const localStore = {
    setItem: (key: string, value: any) => {
        storage.set(key, JSON.stringify(value));
    },
    getItem: (key: string) => {
        const value = storage.getString(key);
        return value ? JSON.parse(value) : null;
    },
    removeItem: (key: string) => {
        storage.delete(key);
    },
    clear: () => {
        storage.clearAll();
    }
    , 
    getAllKeys: () => {
        return storage.getAllKeys();
    }
};

export default localStore;
