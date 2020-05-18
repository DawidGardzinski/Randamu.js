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
      return 'test';
    case 'surname':
      return 'testsurname';
    case 'sex':
      return ['male', 'female'][
        Math.round(Math.random())
      ];
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
    const sex = getData('sex');
    Object.keys(obj).forEach((key) => {
      if (key === 'id') {
        obj.id = i + 1;
      } else if (key === 'sex') {
        obj.sex = sex;
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
