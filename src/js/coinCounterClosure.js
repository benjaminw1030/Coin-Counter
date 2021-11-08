const coinCalc = (coinValue) => {
  return (amount) => {
    return Math.floor(amount / coinValue);
  };
};
const quarters = coinCalc(0.25);
const dimes = coinCalc(0.1);
const nickels = coinCalc(0.05);
const pennies = coinCalc(0.01);

export const coinString = (amount) => {
  if (isNaN(amount)) {
    return;
  }
  const q = quarters(amount);
  amount -= q * 0.25;
  const d = dimes(amount);
  amount -= d * 0.10;
  const n = nickels(amount);
  amount -= n * 0.05;
  const p = pennies(amount);
  return `${q} quarters, ${d} dimes, ${n} nickels, ${p} pennies`
}