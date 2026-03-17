class B:
    @staticmethod
    def even_elements(arr: list) -> list:
        return [x for x in arr if x % 2 == 0]