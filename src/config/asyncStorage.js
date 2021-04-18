import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeObj = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('storing data successful ===key>>>>', key);
  } catch (e) {
    console.log(
      'there is an issue in storing data to local storage (config/asyncStorage.js @8)',
    );
  }
};
//

export const getObj = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // let arrValue = [];
    // for (var i in jsonValue) arrValue.push([i, jsonValue[i]]);
    // console.log('jason value (config/asyncStorage.js @20)', jsonValue);
    let arrValue = jsonValue != null ? JSON.parse(jsonValue) : [];
    // let isArray = Array.isArray(arrValue);
    // console.log('array value check (config/asyncStorage.js @22)', arrValue);
    return arrValue;
  } catch (e) {
    console.log(
      'there is an issue in getting data to local storage (config/asyncStorage.js @22)',
    );
  }
};
//

export const removeObj = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('removed successful (config/asyncStorage.js @32)');
  } catch (e) {
    console.log(
      'there is an issue in removing data from local storage (config/asyncStorage.js @34)',
    );
  }
};
