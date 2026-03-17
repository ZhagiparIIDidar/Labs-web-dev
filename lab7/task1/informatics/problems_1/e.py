from informatics.problems_1._constants import RING_DISTANCE

class E:
    @staticmethod
    def distance_ring(v, t) -> float:
        if t < 0:
            raise ValueError("time cannot be negative")
        return (v*t)%RING_DISTANCE


