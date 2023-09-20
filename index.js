// code your solution here
function saturdayFun(a = "roller-skate") {
    let ans = `This Saturday, I want to ${a}!`;
    return ans;
  }
  
  function mondayWork(a = "go to the office") {
    let ans = `This Monday, I will ${a}.`;
    return ans;
  }
  
  function wrapAdjective(a = "*") {
    const inner = function (b = "special") {
      return `You are ${a}${b}${a}!`;
    };
    return inner;
  }