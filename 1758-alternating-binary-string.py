class Solution:
    def minOperations(self, s: str) -> int:
        # Initialize count variables for two scenarios: starting with '0' and starting with '1'
        count_0, count_1 = 0, 0

        # Iterate over the string
        for i in range(len(s)):
            # If the index is even
            if i % 2 == 0:
                # If the character is '0', increment count_1
                if s[i] == "0":
                    count_1 += 1
                # If the character is '1', increment count_0
                else:
                    count_0 += 1
            # If the index is odd
            else:
                # If the character is '0', increment count_0
                if s[i] == "0":
                    count_0 += 1
                # If the character is '1', increment count_1
                else:
                    count_1 += 1

        # Return the minimum of count_0 and count_1
        return min(count_0, count_1)


s = Solution()

print(s.minOperations("1111"))  # Print the final result
