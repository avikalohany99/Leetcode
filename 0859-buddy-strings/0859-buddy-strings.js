/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function buddyStrings(s, goal) {
  // Check if the lengths of the strings are equal
  if (s.length !== goal.length) {
    return false;
  }

  // Check if the strings are equal
  if (s === goal) {
    // Count the frequency of each character in the string
    const freq = new Map();
    for (let i = 0; i < s.length; i++) {
      freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    }

    // Check if there is a character with a frequency greater than or equal to 2
    for (let count of freq.values()) {
      if (count >= 2) {
        return true;
      }
    }

    return false;
  }

  // Find the indices where the characters differ
  const diffIndices = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffIndices.push(i);
    }
  }

  // Check if there are exactly two different indices
  if (diffIndices.length !== 2) {
    return false;
  }

  // Check if swapping the characters at the different indices results in goal
  const [i, j] = diffIndices;
  return s[i] === goal[j] && s[j] === goal[i];
}