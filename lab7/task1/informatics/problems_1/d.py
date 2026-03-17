class C:
    @staticmethod
    def divide_apple(N, K) -> int:
        if N == 0: raise ValueError("you cannot divide on 0")
        return K % N