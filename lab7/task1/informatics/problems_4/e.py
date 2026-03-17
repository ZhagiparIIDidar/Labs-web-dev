class E:
    @staticmethod
    def binary_logarithm(n: int) -> int:
        if n <= 0:
            raise ValueError("n must be positive")
        log = 0
        while n > 1:
            n //= 2
            log += 1
        return log