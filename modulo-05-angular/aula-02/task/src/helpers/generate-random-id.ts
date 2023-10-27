export const generateRandomId = (): string => {
  const timestamp = new Date().getTime();
  const randomValue = Math.floor(Math.random() * 100000 + 1);

  const randomId = `${timestamp}_${randomValue}`;
  return randomId;
};
