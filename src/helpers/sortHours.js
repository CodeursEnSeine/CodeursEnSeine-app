export const sortHours = (hour1, hour2) => {
  const [h1, min1] = hour1.split(":");
  const [h2, min2] = hour2.split(":");

  // We make sure that JavaScript will compare number and not string by parsing
  // the input.
  const h1Int = parseInt(h1, 10);
  const h2Int = parseInt(h2, 10);
  const min1Int = parseInt(min1, 10);
  const min2Int = parseInt(min2, 10);

  if (h1Int < h2Int) return -1;
  if (h1Int > h2Int) return 1;

  if (min1Int < min2Int) return -1;
  if (min1Int > min2Int) return 1;

  return 0;
};
