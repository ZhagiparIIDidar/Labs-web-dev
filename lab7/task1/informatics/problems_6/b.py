class B:
    @staticmethod
    def power(a: float, n: int) -> float:
        if n < 0:
            raise ValueError("n must be non-negative")
        result = 1.0
        for _ in range(n):
            result *= a
        return result