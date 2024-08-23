export const commma = (target: string | number) => {
  return target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
