class D:
    @staticmethod
    def count_greater_than_previous(arr: list) -> int:
        if not arr:
            return 0
        count = 0
        for i in range(1, len(arr)):
            if arr[i] > arr[i - 1]:
                count += 1
        return count