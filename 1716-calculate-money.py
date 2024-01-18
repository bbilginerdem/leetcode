class Solution(object):
    def totalMoney(self, n):
        """
        :type n: int
        :rtype: int
        """
        increment = 1
        days = 1
        sum = 0
        for i in range(1, n + 1):
            sum += days
            days += 1
            if i % 7 == 0:
                increment += 1
                days = increment

        return sum


s = Solution()

print(s.totalMoney(4))
print(s.totalMoney(20))
