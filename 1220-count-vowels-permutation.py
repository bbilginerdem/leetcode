class Solution(object):
    def countVowelPermutation(self, n):
        a, e, i, o, u = 0, 1, 2, 3, 4
        mod = 10**9 + 7

        # dp[j][c] = num of strs of len = j,
        # where last char is c:
        dp = [[0 for _ in range(5)] for _ in range(n+1)]
        dp[1] = [1, 1, 1, 1, 1]

        for j in range(2, n+1):
            dp[j][a] = (dp[j-1][e] + dp[j-1][i] + dp[j-1][u]) % mod
            dp[j][e] = (dp[j-1][a] + dp[j-1][i]) % mod
            dp[j][i] = (dp[j-1][e] + dp[j-1][o]) % mod
            dp[j][o] = dp[j-1][i]
            dp[j][u] = (dp[j-1][i] + dp[j-1][o]) % mod

        return sum(dp[n]) % mod

# Create an instance of the Solution class
s = Solution()

# Call the function with a test input
print(s.countVowelPermutation(5))  # Print the final result