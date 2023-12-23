class Solution:
    def isPathCrossing(self, path: str) -> bool:
        x, y = 0, 0
        visited = {(x, y)}
        directions = {"N": (0, 1), "S": (0, -1), "E": (1, 0), "W": (-1, 0)}

        for move in path:
            x += directions[move][0]
            y += directions[move][1]

            if (x, y) in visited:
                return True
            visited.add((x, y))

        return False

# Time complexity: O(n) (since iterating over each char in string once)
# Space complexity: O(n) (worst-case scenario)


s = Solution()

print(s.isPathCrossing("NES"))  # Print the final result
print(s.isPathCrossing("NESWW"))  # Print the final result
