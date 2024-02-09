export const numChange = (target: string | number) => {
  return target.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}