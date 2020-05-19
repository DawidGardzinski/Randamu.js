import data from 'logic/data';
import downloadData from 'logic/downloadData';
import randomInt from 'logic/randomInt';
import randomDate from 'logic/randomDate';

const createObjectTemplate = (objCollection) => {
  const obj = {
    id: true,
  };

  Object.keys(objCollection).forEach((el) => {
    if (objCollection[el] === true) {
      Object.assign(obj, { [el]: true });
    }
  });

  return obj;
};

const getData = (type) => {
  switch (type) {
    case 'name':
      return data[`${type}s`];
    case 'surname':
    case 'car':
    case 'color': {
      const arr = data[`${type}s`];
      return arr[randomInt(arr.length - 1)];
    }
    case 'country': {
      const arr = data.countries;
      return arr[randomInt(arr.length - 1)];
    }
    case 'birth':
      return randomDate(
        344473200000,
        1589912977324,
      );
    default:
      return null;
  }
};

const createObjectsArrayWithData = (
  number,
  objectTemplate,
) => {
  const obj = objectTemplate;
  const objArr = [];

  for (let i = 0; i < number; i++) {
    const sex = ['male', 'female'][randomInt(1)];
    Object.keys(obj).forEach((key) => {
      if (key === 'id') {
        obj.id = i + 1;
      } else if (key === 'sex') {
        obj.sex = sex;
      } else if (key === 'name') {
        const nameArr = getData('name')[sex];
        obj.name =
          nameArr[randomInt(nameArr.length - 1)];
      } else {
        obj[key] = getData(key);
      }
    });

    objArr.push({ ...obj });
  }
  return objArr;
};

const prepareNDownloadData = (
  objCollection,
  number,
  fileType,
) => {
  const obj = createObjectTemplate(objCollection);
  const dataArr = createObjectsArrayWithData(
    number,
    obj,
  );

  return downloadData(fileType, dataArr);
};

export default prepareNDownloadData;
