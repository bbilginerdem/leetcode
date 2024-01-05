class Solution(object):
    def findMatrix(self, nums):
        # Create an empty set to store the distinct elements
        seen = set()
        # Create an empty list to store the rows of the 2d array
        result = [[]]
        # Loop through the elements of nums
        for num in nums:
            # If the element is not in the set, add it to the set and the current row
            if num not in seen:
                seen.add(num)
                result[-1].append(num)
            # If the element is in the set, start a new row and add it to the set and the row
            else:
                seen = {num}
                result.append([num])
        # Return the 2d array
        return result


s = Solution()
print(s.findMatrix([1, 3, 4, 1, 2, 3, 1]))
