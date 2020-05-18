import data from 'logic/data';

const randomInt = (max) =>
  Math.floor(Math.random() * Math.floor(max));

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
    case 'surname': {
      const arr = data[`${type}s`];
      return arr[randomInt(arr.length)];
    }
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
    const sex = ['male', 'female'][
      Math.round(Math.random())
    ];
    Object.keys(obj).forEach((key) => {
      if (key === 'id') {
        obj.id = i + 1;
      } else if (key === 'sex') {
        obj.sex = sex;
      } else if (key === 'name') {
        const nameArr = getData('name')[sex];
        obj.name =
          nameArr[randomInt(nameArr.length)];
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
) => {
  const obj = createObjectTemplate(objCollection);

  return createObjectsArrayWithData(number, obj);
};

export default prepareNDownloadData;
