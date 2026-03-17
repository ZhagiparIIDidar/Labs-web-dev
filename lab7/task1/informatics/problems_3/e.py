class E:
    @staticmethod
    def sum_of_digits(num: int) -> int:
        return sum(int(ch) for ch in str(abs(num)))