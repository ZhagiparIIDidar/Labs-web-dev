from math import hypot

def hypo(a:float, b:float)->float:
    return hypot(a, b)

def main():
    a, b = map(float, input().split())
    print(hypo(a, b))


if __name__ == "__main__":
    main()

