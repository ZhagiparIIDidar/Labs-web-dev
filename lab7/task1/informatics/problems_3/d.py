class D:
    @staticmethod
    def digit_in_number(num: int, digit: int) -> bool:
        if digit < 0 or digit > 9:
            raise ValueError("digit must be in 0..9")
        return str(abs(num)).find(str(digit)) != -1