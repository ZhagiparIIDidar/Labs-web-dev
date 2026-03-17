class C:
    @staticmethod
    def squares(n: int) -> list:
        if n < 0:
            raise ValueError("n must be non-negative")
        return [i * i for i in range(1, n + 1)]