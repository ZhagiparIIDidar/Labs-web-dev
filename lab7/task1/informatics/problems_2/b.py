class B:
    @staticmethod
    def is_leap_year(year: int) -> str:
        if year % 400 == 0:
            return "YES"
        if year % 100 == 0:
            return "NO"
        return "YES" if year % 4 == 0 else "NO"