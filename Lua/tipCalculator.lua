
-- local answer
-- repeat
--   io.write("Type in yes or no and hit \"Enter\".")
--   io.flush()
--   answer = io.read()
-- until answer == "yes" or answer == "no"

-- if answer == "yes" then
--   print("You answered yes")
-- elseif answer == "no" then
--   print("You answered no")
-- end



-- 1. Tip Calculator

-- Your task is to write a program that calculates how much of a tip to leave at a restaurant.

-- Prompt the user for two things:

-- The total bill amount
-- The level of service, which can be one of the following: good, fair, or bad
-- Calculate the tip amount and the total amount (bill amount + tip amount). The tip percentage based on the level of service is based on:

-- good -> 20%
-- fair -> 15%
-- bad -> 10%

local billAmount
local serviceLevel
local tipAmount
local totalAmount

io.write("What is the bill amount? ")
io.flush()
billAmount = tonumber(io.read())

repeat
  io.write("What was the level of service: Good, fair or bad? ")
  io.flush()
  serviceLevel = io.read()
until serviceLevel == "good" or serviceLevel == "fair" or serviceLevel == "bad"

print("serviceLevel", serviceLevel)

if serviceLevel == "good" then
  tipAmount = billAmount * 0.2
elseif serviceLevel == "fair" then
  tipAmount = billAmount * 0.15
elseif serviceLevel == "bad" then
  tipAmount = billAmount * 0.1
end

print("tipAmount", tipAmount)

totalAmount = tipAmount + billAmount 

local formatedtotalAmount = string.format("$%.2f", totalAmount)

print("Your level of service was " .. serviceLevel .. ".")
print("Your total bill amount is " .. formatedtotalAmount .. ".")

