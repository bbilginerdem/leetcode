class Solution:
    def scoreOfString(self, s: str) -> int:
        char_list = [c for c in s]
        ascii_list = [ord(ch) for ch in char_list]

        # Calculate the sum of absolute differences between adjacent ASCII values
        sum_abs = sum(abs(ascii_list[i] - ascii_list[i + 1]) for i in range(len(ascii_list) - 1))

        return sum_abs

s = Solution()
print(s.scoreOfString('hello'))
