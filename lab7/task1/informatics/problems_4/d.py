class D:
    @staticmethod
    def exact_power_of_two(n: int) -> str:
        if n <= 0:
            return "NO"
        return "YES" if (n & (n - 1)) == 0 else "NO"