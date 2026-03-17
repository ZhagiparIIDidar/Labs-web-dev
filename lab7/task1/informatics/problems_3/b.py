class B:
    @staticmethod
    def remainder(a: int, b: int) -> int:
        if b == 0:
            raise ValueError("division by zero")
        return a % b