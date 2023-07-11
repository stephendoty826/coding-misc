# PROBLEM
# Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

# ASSUMPTIONS/CLARIFICATIONS

# TEST CASES
# input [1, 2, 3] => output [6, 3, 2]
# input [1, 2, 3, 4, 5] => output [120, 60, 40, 30, 24]

# GAME PLAN
# Declare function that accepts a list (array) of integers list_of_integers
  # Create a list of prefix_products: input [1, 2, 3] => output [1, 1 * 2, 1 * 2 * 3]
  # Create a reversed_list of list_of_integers and then create a list of suffix_products: input [3, 2, 1] => output [3, 3 * 2, 3 * 2 * 1]
  # Reverse suffix_products list => [1 * 2 * 3, 2 * 3, 3]
  # Create products_list as an empty list
  # Loop through list_of_integers and compile products of integers except for the current value
    # if(i === 0) FIRST ELEMENT
      # products_list.append(suffix_products[1]) GRAB SECOND ELEMENT OF suffix_products
    # elif(i === len(list_of_integers) - 1) LAST ELEMENT
      # products_list.append(prefix_products[-2]) GRAB SECOND TO LAST ELEMENT OF prefix_products
    # else FOR ALL OTHER ELEMENTS
      # products_list.append(prefix_products[i - 1] * suffix_products[i + 1])
  # return products_list

# SOLUTION
# Declare function that accepts a list (array) of integers list_of_integers
def get_products(list_of_integers):

  # Create a list of prefix_products: input [1, 2, 3] => output [1, 1 * 2, 1 * 2 * 3]
  prefix_products = []
  for num in list_of_integers:
    if(len(prefix_products) == 0):
      prefix_products.append(num)
    else:
      prefix_products.append(prefix_products[-1] * num)

  # Create a list of suffix_products: input [3, 2, 1] => output [3, 3 * 2, 3 * 2 * 1] LOOP THROUGH list_of_integers in reverse
  suffix_products = []
  for num in reversed(list_of_integers):
    if(len(suffix_products) == 0):
      suffix_products.append(num)
    else:
      suffix_products.append(suffix_products[-1] * num)

  # Reverse suffix_products list => [1 * 2 * 3, 2 * 3, 3]
  suffix_products.reverse()

  # Create products_list as an empty list
  products_list = []

  # Loop through list_of_integers and compile products of integers except for the current value
  for i in range(len(list_of_integers)):
    if(i == 0): # FIRST ELEMENT
      products_list.append(suffix_products[1]) # GRAB SECOND ELEMENT OF suffix_products
    elif(i == len(list_of_integers) - 1): # LAST ELEMENT
      products_list.append(prefix_products[-2]) # GRAB SECOND TO LAST ELEMENT OF prefix_products
    else: # FOR ALL OTHER ELEMENTS
      products_list.append(prefix_products[i - 1] * suffix_products[i + 1])

  return products_list

print(get_products([1, 2, 3, 4, 5]))
