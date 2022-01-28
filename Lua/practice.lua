
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

-- -- the only way (so far) to print the contents of a table is to print them out one at a time
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





-- -- 4. De-dup
-- -- Given a table of numbers or strings, create a new list containing the same elements as the first list, except with any duplicate values removed. Print the list.

local num1 = {1, 4, 5, 6, 3, 2, 5, 1, 2, 6, 1, 6}

function dedup(numTable)
  local cache = {}

  for i=1, #numTable do

    if not cache[numTable[i]] then
      cache[numTable[i]] = numTable[i]
    end

  end

  return cache
end

local results = dedup(num1)

for i=1, #results do
  print(results[i])
end

-- -- when local num1 = {1, 4, 5, 6, 3, 2, 5, 1, 2, 6, 1, 6} (it has 1-6), below prints out the keys, values in numerical order) but when local num1 = {1, 4, 5, 6, 2, 5, 1, 2, 6, 1, 6} (just removed the 3), below prints the keys, values in the order they are in the results table. WHY???
-- for key,value in pairs(results) do
--   print(key .. ":" .. value)
-- end


