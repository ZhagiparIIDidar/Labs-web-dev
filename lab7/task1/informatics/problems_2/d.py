class D:
    @staticmethod
    def sign(num: int) -> int:
        if num > 0:
            return 1
        if num < 0:
            return -1
        return 0