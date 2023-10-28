class Pizza:
    def __init__(self, toppings, size):
        self.toppings = toppings
        self.size = size

    def __str__(self):
        return f"{self.size} inch pizza with {self.toppings} toppings"

def make_pizza(toppings, size):
    return Pizza(toppings, size)


pepperoni_pizza = make_pizza(["ham", "pepperoni"], 12)

print(pepperoni_pizza)