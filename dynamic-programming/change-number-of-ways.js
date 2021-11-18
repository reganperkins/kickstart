/*
Number Of Ways To Make Change
  Given a variety of coin denominations existing in a currency system, find
  the total number of ways a given amount of money can be expressed using coins
  in that currency system. Assume infinite supply of coins of every denomination.

Example
  Input: coins = [1, 2, 3], amount = 3
  Output: 3

The three ways are -
  Using the coin having denomination 1 thrice
  Using the coin having denomination 3 once
  Using the coin having denomination 2 once and using the coin having denomination 1 once

Notes
  Two ways are considered different if they use a different number of coins of any
  particular denomination.

As the answer can be quite large, return it modulo 1000000007.
*/

function numberOfWays(coins, amount) {
  if (amount < 0) return -1;
  const solution = new Array(amount + 1).fill(0);
  solution[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      solution[j] = (solution[j] + solution[j - coins[i]]) % 1000000007;
    }
  }
  return solution[solution.length - 1];
}
