class A:
    @staticmethod
    def even_numbers(a: int, b: int) -> list:
        start = a if a <= b else b
        end = b if a <= b else a
        return [n for n in range(start, end + 1) if n % 2 == 0]