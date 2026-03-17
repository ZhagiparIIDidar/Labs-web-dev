class C:
    @staticmethod
    def list_powers_of_two(n: int) -> list:
        if n < 1:
            return []
        result = []
        value = 1
        while value <= n:
            result.append(value)
            value *= 2
        return result