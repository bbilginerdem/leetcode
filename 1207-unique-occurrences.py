class Solution(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        counts = dict()
        for num in arr:
            counts[num] = arr.count(num)

        len_counts = len(counts.values())
        values_set = set(counts.values())
        len_values_set = len(values_set)

        if len_counts == len_values_set:
            return True
        else:
            return False


s = Solution()
print(s.uniqueOccurrences([1, 2, 2, 1, 1, 3]))
