export const findItemById = (collection, id) => collection.find((item) => item.id === id);

export const findItemsByIds = (collection, ids) => collection.filter((item) => ids.includes(item.id));


const padTo2Digit = (num) => {
  return num.toString().padStart(2, '0');
}

export const convertMsToHM = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return `${padTo2Digit(minutes)}:${padTo2Digit(seconds)}`;
}
