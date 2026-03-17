class B:
    @staticmethod
    def minimum_divisor(n: int) -> int:
        if n <= 1:
            raise ValueError("n must be greater than 1")
        d = 2
        while d * d <= n:
            if n % d == 0:
                return d
            d += 1
        return n