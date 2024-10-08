// code your solution here
// 1. saturdayFun Function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 2. mondayWork Function
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // 3. wrapAdjective Function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example Calls (for testing)
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"
  
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // "This Monday, I will work from home."
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"
  