from abc import ABC, abstractmethod

class Animal:
    def __init__(self, name: str, age: int, weight: float) -> None:
        self.name = name
        self.age = age
        self.weight = weight

    def speak(self) -> str:
        return "..."

    def info(self) -> str:
        return f"{self.name}, age {self.age}, weight {self.weight} kg"

    def birthday(self) -> None:
        self.age += 1

    def __str__(self) -> str:
        return self.info()


class Fish(Animal):
    def __init__(self, name: str, age: int, weight: float, taste: str):
        super().__init__(name, age, weight)
        self.taste = taste

class Dog(Animal):
    def __init__(self, name: str, age: int, weight: float, breed: str) -> None:
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self) -> str:
        return "Woof!"

    def fetch(self, item: str) -> str:
        return f"{self.name} fetches the {item}."

    def info(self) -> str:
        return f"Dog {self.name} ({self.breed}), age {self.age}, weight {self.weight} kg"


class Cat(Animal):
    def __init__(self, name: str, age: int, weight: float, color: str) -> None:
        super().__init__(name, age, weight)
        self.color = color

    def speak(self) -> str:
        return "Meow!"

    def scratch(self) -> str:
        return f"{self.name} scratches the post."

    def info(self) -> str:
        return f"Cat {self.name} ({self.color}), age {self.age}, weight {self.weight} kg"