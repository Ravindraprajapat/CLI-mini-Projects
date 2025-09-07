

import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = [];

const showMenu = () => {
  console.log(chalk.blue.bold("\n====== TODO CLI APP ======"));
  console.log(chalk.green("1: Add a Task"));
  console.log(chalk.yellow("2: View Tasks"));
  console.log(chalk.red("3: Exit"));
  rl.question(chalk.cyan("👉 Choose an Option: "), handleInput);
}

const handleInput = (option) => {
  if (option === "1") {
    rl.question(chalk.magenta("✍️  Enter the Task: "), (task) => {
      todos.push(task);
      console.log(chalk.greenBright(`✅ Task Added: ${task}`));
      showMenu();
    });

  } else if (option === "2") {
    if (todos.length === 0) {
      console.log(chalk.redBright("⚠️  No tasks found!"));
    } else {
      console.log(chalk.yellow.bold("\n📋 Your Todo List:"));
      todos.forEach((task, index) => {
        console.log(chalk.white(`${index + 1}. ${task}`));
      });
    }
    showMenu();

  } else if (option === "3") {
    console.log(chalk.blueBright("👋 Good Bye! Have a great day!"));
    rl.close();

  } else {
    console.log(chalk.red("❌ Invalid Option! Please try again."));
    showMenu();
  }
}

showMenu();


// import readline from 'readline';
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// const todos = [];
//  const showMenu = ()=>{
//      console.log("\n1: Add a Task")
//      console.log("2: view Task")
//      console.log("3:  Exit")
//      rl.question("Choose an Option: " , handleInput)
//  }

//  const handleInput = (option) =>{
//       if(option === "1") {
//         rl.question("enter the Task: " , (task)=>{
//            todos.push(task)
//            console.log("Task Added : " ,task)
//            showMenu();
//         })
        
//       } else if(option === "2") {
//         console.log(" your Todo List: ")
//         todos.forEach((task , index )=>{
//            console.log(`${index+1}.${task}`)
//             showMenu();
//         })
       
//       } else if(option === "3") {
//         console.log("Good Bye !")
//         rl.close();
//       } else{
//         console.log("Invalid Option ! please try again")
//         showMenu();
//       }


//  }
//  showMenu();