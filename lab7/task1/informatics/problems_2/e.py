class E:
    @staticmethod
    def which_is_bigger(a: int, b: int) -> int:
        if a > b:
            return 1
        if b > a:
            return 2
        return 0