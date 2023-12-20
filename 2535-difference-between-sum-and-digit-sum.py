
class Solution(object):
    def differenceOfSum(self, nums):
        def sum_array(arr):
            return sum(arr)

        digits = []
        for num in nums:
            for i in str(num):
                digits.append(int(i))

        return abs(sum_array(nums) - sum_array(digits))

s = Solution()

print(s.differenceOfSum([0,3,5,71]))  # Print the final result