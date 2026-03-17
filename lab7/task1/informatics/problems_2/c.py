from ._constants import MAX_SCORE

class C:
    @staticmethod
    def testing_system(result: int) -> int:
        if result <= 0:
            return 0
        if result < MAX_SCORE:
            return 1
        return 2
