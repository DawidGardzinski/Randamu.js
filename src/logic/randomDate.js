const randomDate = (start, end) => {
  const date = new Date(
    +start + Math.random() * (end - start),
  );

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year}`;
};

export default randomDate;
