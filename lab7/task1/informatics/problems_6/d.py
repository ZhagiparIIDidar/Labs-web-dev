class D:
    @staticmethod
    def vote(x: int, y: int, z: int) -> int:
        return 1 if (x + y + z) >= 2 else 0