/*
Cut The Rod To Maximize Profit


Given the prices for rod pieces of every size between 1 inch to n inch, find the maximum total profit that can be made by cutting a rod of size n inch into pieces.

Example

Input: price = [1, 5, 8, 9]

Output: 10

The rod can be cut in the ways given below:

1 + 1 + 1 + 1 => price[0] + price[0] + price[0] + price[0] = 4
1 + 1 + 2 => price[0] + price[0] + price[1] = 7
1 + 3 => price[0] + price[2] = 9
2 + 2 => price[1] + price[1] = 10
4 => price[3] = 9
The maximum profit is obtained by cutting it into two ‘2’ inch pieces.
*/


// recursive
function getMaximumProfit(prices) {
  return cutRod(prices, prices.length);
}

function cutRod(prices, rodLength) {
  if (!rodLength) return 0;
  let maxRevenue = 0;
  for (let cut = 1; cut <= rodLength; cut++) {
    const currentRevenue = cutRod(prices, rodLength - cut) + prices[cut - 1];
    maxRevenue = Math.max(maxRevenue, currentRevenue)
  }
  return maxRevenue;
}


// dynamic programming with tabulation
function getMaximumProfit(prices) {
  const rodLength = prices.length;
  const table = [0];

  for (let i = 1; i <= rodLength; i++) {
    table[i] = prices[i - 1];
    for (let cut = 1; cut < i; cut++) {
      const currentRevenue = table[i - cut] + prices[cut - 1];
      table[i] = Math.max(table[i], currentRevenue);
    }
  }
  return table[rodLength];
}
