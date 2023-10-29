# Write algorithm that goes through a range of 1-25. If the number is divisible by 3, print fizz, if divisible by 5 print buzz, if divisible by both 3 and 5 print fizzbuzz. Otherwise print the number.

def fizz_buzz():
  phrase = ""

  for num in range(1, 26):
    if(num % 3 == 0):
      phrase += "fizz"
    if(num % 5 == 0):
      phrase += "buzz"


fizz_buzz()