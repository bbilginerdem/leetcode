class Solution:
    def climbStairs(self, n: int) -> int:
        one, two = 1, 1

        for i in range(n - 1):
            temp = two
            two = two + one
            one = temp

        return two


# return climbStairs(n-1)+

s = Solution()

print(s.climbStairs(5))
print(s.climbStairs(4))

# Fibonacci series

# class Solution:
#     def climbStairs(self, n: int) -> int:
#         pre, cur = 0,1
#         for i in range(n):
#             pre, cur = cur, pre+cur
#         return cur

# class Solution:
#   def climbStairs(self, n: int) -> int:
#     dp = [0,1,2]
#     for i in range(2,n):
#         dp.append(dp[i] + dp[i-1])

#     return dp[n]
