# Write a function which accepts a number and adds up all the numbers from 0 to that number 

# ASSUMPTIONS
# - only positive numbers will be given

# TEST CASES
# 4 -> 10
# 10 -> 55 

# GAME PLAN without recursion
# Define range_addition function that takes in a number (num)
  # Declare sum variable and set it equal to 0
  # Use for loop with range to loop through numbers 1 through num
    # add each value to sum
  # return sum

# SOLUTION without recursion
# Define range_addition function that takes in a number (num)
def range_addition(number):
  # Declare sum variable and set it equal to 0
  sum = 0
  # Use for loop with range to loop through numbers 1 through num
  for num in range(number + 1):
    sum += num
    # add each value to sum
  return sum

print(range_addition(10))






# GAME PLAN without recursion
# Define range_addition_recursive function that takes in a number
  # if number == 1:
    # return 1
  # return number + range_addition(number - 1)

# SOLUTION with recursion
# Define range_addition_recursive function that takes in a number
def range_addition_recursive(number):
  if(number == 1):
    return 1
  return number + range_addition(number - 1)


print(range_addition_recursive(10))