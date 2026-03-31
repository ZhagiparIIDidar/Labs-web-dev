from models import Animal, Dog, Cat


def main() -> None:
    animals = [
        Dog("Rex", 3, 18.5, "Labrador"),
        Cat("Misty", 2, 4.2, "Gray"),
    ]

    for pet in animals:
        print(pet)
        print(pet.speak())

    print(animals[0].fetch("ball"))
    print(animals[1].scratch())

    for pet in animals:
        pet.birthday()

    print("After birthdays:")
    for pet in animals:
        print(pet)


if __name__ == "__main__":
    main()