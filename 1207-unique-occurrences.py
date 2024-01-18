class Solution(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        set = {}
        for num in arr:
            set[num] = arr.count(num)

        len_counts = len(set.values())
        values_set = set(set.values())
        len_values_set = len(values_set)

        if len_counts == len_values_set:
            return True
        else:
            return False


s = Solution()
print(s.uniqueOccurrences([1, 2, 2, 1, 1, 3]))
