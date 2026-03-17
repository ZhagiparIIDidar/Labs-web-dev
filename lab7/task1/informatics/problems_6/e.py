class E:
    @staticmethod
    def is_prime(n: int) -> str:
        if n < 2:
            return "NO"
        if n == 2:
            return "YES"
        if n % 2 == 0:
            return "NO"
        d = 3
        while d * d <= n:
            if n % d == 0:
                return "NO"
            d += 2
        return "YES"