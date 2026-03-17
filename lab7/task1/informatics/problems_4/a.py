class A:
    @staticmethod
    def list_of_squares(n: int) -> list:
        if n < 0:
            raise ValueError("n must be non-negative")
        result = []
        i = 1
        while i * i <= n:
            result.append(i * i)
            i += 1
        return result