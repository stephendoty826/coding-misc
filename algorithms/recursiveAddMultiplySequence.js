
// Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?

// For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

// solution via Eloquent JavaScript
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)



// target is 13

/****first pass
  current = 1
  history = "1"
    return find(6, "(1 + 5)") || find(3, "(1 * 3)")

        ***second pass find(6, "(1 + 5)")
        current = 6,
        history = "1 + 5"
          return find(11, "((1 + 5) + 5)") || find(18, "((1 + 5) * 3)")

              ***third pass find(11, "((1 + 5) + 5)")
              current = 11,
              history = "1 + 5 + 5"
                return find(16, "(((1 + 5) + 5) + 5)") || find(33, "(((1 + 5) + 5) * 3)")

                    ***fourth pass find(16, "(((1 + 5) + 5) + 5)")
                    current = 16,
                    history = "(((1 + 5) + 5) + 5)"
                      return null

                    ***fourth pass find(33, "(((1 + 5) + 5) * 3)")
                    current = 33, 
                    history = "(((1 + 5) + 5) * 3)"
                      return null

              ***third pass find(18, "((1 + 5) * 3)")
              current = 18,
              history = "((1 + 5) * 3)"
                return null

        ***second pass find(3, "(1 * 3)")
        current = 3
        history = "1 * 3"
          return find(8, "((1 * 3) + 5)") || find(9, "((1 * 3) * 3)")

              ***third pass find(8, "((1 * 3) + 5)")
              current = 8,
              history = "((1 * 3) + 5)"
                return find(13, "(((1 * 3) + 5) + 5)") || find(24, "(((1 * 3) + 5) * 3)")

                    ***fourth pass find(13, "(((1 * 3) + 5) + 5)")
                    current = 13,
                    history = "(((1 * 3) + 5) + 5)"
                      return history

                    ***fourth pass find(24, "(((1 * 3) + 5) * 3)")
                    current = 24, 
                    history = "(((1 * 3) + 5) * 3)"
                      return null
              
              ***third pass find(9, "((1 * 3) * 3)")
              current = 9,
              history = "((1 * 3) * 3)"
                return find(14, "(((1 * 3) * 3) + 5)") || find(27, "(((1 * 3) * 3) * 3)")

                    ***fourth pass find(14, "(((1 * 3) * 3) + 5)")
                    current = 14,
                    history = "(((1 * 3) * 3) + 5)"
                      return null

                    ***fourth pass find(27, "(((1 * 3) * 3) * 3)")
                    current = 27, 
                    history = "(((1 * 3) * 3) * 3)"
                      return null
  */
