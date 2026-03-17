class E:
    @staticmethod
    def has_same_sign_neighbors(arr: list) -> str:
        for i in range(1, len(arr)):
            if arr[i] == 0 or arr[i - 1] == 0:
                continue
            if (arr[i] > 0 and arr[i - 1] > 0) or (arr[i] < 0 and arr[i - 1] < 0):
                return "YES"
        return "NO"