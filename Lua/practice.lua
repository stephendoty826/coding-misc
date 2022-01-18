
-- -- Multiply Vectors
-- -- Given two tables of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists. Example:

-- -- [2, 4, 5] x [2, 3, 6] = [4, 12, 30]

-- local num1 = {1, 6, 3, 7}
-- local num2 = {5, 3, 9, 0}
-- local num3 = {}

-- for i=1, #num1 do
--   table.insert(num3, num1[i] * num2[i])
-- end

-- -- -- does the same thing as the code above
-- -- for i=1, #num1 do
-- --   num3[i] = num1[i] * num2[i]
-- -- end

-- -- the only way (so far) to print to contents of a table is to print them out one at a time
-- for i=1, #num3 do
--   print(num3[i])
-- end




-- -- Fizz Buzz using Lua

-- for i = 1, 50 do

--   local output = ""

--   if i % 3 == 0 then
--     output = output .. "Fizz"
--   end
--   if i % 5 == 0 then
--     output = output .. "Buzz"
--   end

--   if output == "" then
--     print(i)
--   else
--     print(output)
--   end

-- end





-- 4. De-dup
-- Given a table of numbers or strings, create a new list containing the same elements as the first list, except with any duplicate values removed. Print the list.








-- 5. Leetspeak
-- Given a paragraph of text as a String, print the paragraph in leetspeak.

-- To translate a String to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):

-- Letter	Translates To
-- A	4
-- E	3
-- G	6
-- I	1
-- O	0
-- S	5
-- T	7
-- Example: If your program is given the String "I am a leet programmer", it should print "1 4m 4 l337 pr0gr4mm3r" as the leetspeak translation

