class C:
    @staticmethod
    def xor(a: int, b: int) -> int:
        a_bool = a != 0
        b_bool = b != 0
        return 1 if a_bool ^ b_bool else 0