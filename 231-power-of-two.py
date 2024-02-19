class Solution(object):
    def is_power_of_two(self, n):
        """
        :type n: int
        :rtype: bool
        """
        return n > 0 and (n & (n - 1)) == 0


s = Solution()

print(s.is_power_of_two(5))
