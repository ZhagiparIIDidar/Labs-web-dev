from problems_1 import A, B, C, E

def check_a() -> None:
    try:
        inp = input()
        a, b = map(float, inp.split(",") if "," in inp else inp.split())
        print(f"{A.hypotenuse(a, b):.2f}")
    except ValueError as err:
        print(err)

def check_b() -> None:
    try:
        inp = int(input())
        print(B.prev_next(inp))
    except ValueError as err:
        print(err)

def check_c() -> None:
    try:
        inp = input()
        a, b = map(int, inp.split(",") if "," in inp else inp.split())
        print(C.divide_apple(a, b))
    except ValueError as err:
        print(err)

def check_e() -> None:
    try:
        inp = input()
        a, b = map(float, inp.split(",") if "," in inp else inp.split())
        print(E.distance_ring(a, b))
    except ValueError as err:
        print(err)

def main():
    check_c()

if __name__ == "__main__":
    main()

