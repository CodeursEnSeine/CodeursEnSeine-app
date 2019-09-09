export const sortHours = (hour1, hour2) => {
  return parseInt(hour1.split(":")[0], 10) - parseInt(hour2.split(":")[0], 10);
};
