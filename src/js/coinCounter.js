import { createDidYouMeanMessage } from "jest-validate";

const coinCounter = (
  amount,
  quarterCount,
  dimeCount,
  nickelCount,
  pennyCount
) => {
  if (isNaN(amount)) {
    return;
  }
  if (amount < 0.25) {
    if (amount < 0.1) {
      if (amount < 0.05) {
        if (amount < 0.01) {
          return `${quarterCount} quarters, ${dimeCount} dimes, ${nickelCount} nickels, ${pennyCount} pennies`;
        } else {
          return coinCounter(
            amount - 0.01,
            quarterCount,
            dimeCount,
            nickelCount,
            pennyCount + 1
          );
        }
      } else {
        return coinCounter(
          amount - 0.05,
          quarterCount,
          dimeCount,
          nickelCount + 1,
          pennyCount
        );
      }
    } else {
      return coinCounter(
        amount - 0.1,
        quarterCount,
        dimeCount + 1,
        nickelCount,
        pennyCount
      );
    }
  } else {
    return coinCounter(
      amount - 0.25,
      quarterCount + 1,
      dimeCount,
      nickelCount,
      pennyCount
    );
  }
};

export default coinCounter;