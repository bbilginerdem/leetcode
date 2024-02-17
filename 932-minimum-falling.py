class Solution(object):
    def minFallingPathSum(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
        n = len(matrix) # get the size of the matrix
        dp = [[0] * n for _ in range(n)] # create an empty array of the same size
        dp[-1] = matrix[-1] # copy the last row of the matrix to the array
        for i in range(n-2, -1, -1): # loop from the second last row to the first row
            for j in range(n): # loop through each column
                # get the minimum sum of the possible next choices
                best = min(dp[i+1][max(0, j-1)], dp[i+1][j], dp[i+1][min(n-1, j+1)])
                # add the current element to the best choice and update the array
                dp[i][j] = matrix[i][j] + best
        return min(dp[0]) # return the minimum value in the top row


s = Solution()
print(s.minFallingPathSum())
