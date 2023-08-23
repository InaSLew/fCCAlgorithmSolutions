/*
 Problem: Find the symmetric difference
 The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 */
export const getSymmetricDiff = (...args: number[][]): number[] => {
  if (args.length === 1) return args[0].sort((a, b) => a - b);

  // otherwise operate on args[0] and args[1]
  const result = [...new Set(args[0])].reduce(
    (acc, cur) => {
      if (acc.includes(cur)) {
        // remove from acc
        const removeIdx = acc.indexOf(cur);
        acc.splice(removeIdx, 1);
      } else acc.push(cur);
      return acc;
    },
    [...new Set(args[1])]
  );
  args = args.slice(2);
  return getSymmetricDiff(result, ...args);
};
