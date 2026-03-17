class C:
    @staticmethod
    def count_positive(arr: list) -> int:
        return sum(1 for x in arr if x > 0)