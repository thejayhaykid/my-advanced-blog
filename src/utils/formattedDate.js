export default (str) => {
  const [date = '', time = ''] = str.split('T');

  return `${date}`;
};
