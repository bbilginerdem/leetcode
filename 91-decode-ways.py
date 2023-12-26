class Solution:
    def numDecodings(self, s: str) -> int:
        if s[0] == 0:
            return 0

        # create array of 0s
        dp = [0 for _ in range(len(s) + 1)]

        # The number of ways to decode a string of size 0 is 1.
        dp[0] = 1

        # The number of ways to decode a string of size 1 is 1 if the first character is not '0'.
        dp[1] = 0 if s[0] == "0" else 1

        for i in range(2, len(s) + 1):
            # Check if successful single digit decode is possible.
            if 0 < int(s[i - 1 : i]) <= 9:
                dp[i] += dp[i - 1]

            # Check if successful two digit decode is possible.
            if 10 <= int(s[i - 2 : i]) <= 26:
                dp[i] += dp[i - 2]
        return dp[len(s)]


# Initializes the first two elements of dp. dp[0] is set to 1, which means there is one way to decode an empty string. dp[1] is set to 0 if the first character of s is ‘0’, or 1 otherwise. This means there is no way to decode a string that starts with ‘0’, or one way to decode a string that starts with any other digit.
# After that, it starts a loop from index 2 to len(s) + 1. For each index i, it does two checks:
# It checks if the single digit at index i-1 of s is valid. A valid single digit is any number from 1 to 9, which can be mapped to a letter from ‘A’ to ‘I’. If it is valid, it adds the value of dp[i-1] to dp[i]. This means that the number of ways to decode the message up to index i is the same as the number of ways to decode the message up to index i-1, plus one more way to decode the single digit at index i-1.
# It checks if the two digits at index i-2 and i-1 of s are valid. A valid two digits is any number from 10 to 26, which can be mapped to a letter from ‘J’ to ‘Z’. If it is valid, it adds the value of dp[i-2] to dp[i]. This means that the number of ways to decode the message up to index i is the same as the number of ways to decode the message up to index i-1, plus the number of ways to decode the two digits at index i-2 and i-1.
# Finally, it returns the value of dp[len(s)], which is the number of ways to decode the entire message.
