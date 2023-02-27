module.exports = function check(str, bracketsConfig) {
  let all = [].concat(...bracketsConfig);

  let openBrackets = all.filter((item, index) => {
    if (index % 2 === 0) {
      return item;
    }
  });
  let closeBrackets = all.filter((item, index) => {
    if (index % 2 !== 0) {
      return item;
    }
  });

  function isClosedBrackets(ch) {
    return closeBrackets.indexOf(ch) > -1;
  }
  function isOpenBrackets(ch) {
    return openBrackets.indexOf(ch) > -1;
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (isClosedBrackets(current)) {
      let lastElementInStack = stack[stack.length - 1];

      if (
        closeBrackets.indexOf(current) ===
        openBrackets.indexOf(lastElementInStack)
      ) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else if (isOpenBrackets(current)) {
      stack.push(current);
    }
  }

  return stack.length === 0;
};
