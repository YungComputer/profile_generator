//Pair Programming with Eina

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerObj = {};
const paragraphPrint = (obj) => {
  const { one, two, three, four, five, six, seven} = obj;

  return `${one} loves listening to ${three} while ${two}, devouring ${five} for ${four}, prefers ${six} over any other sport, and is amazing at ${seven}. `;
}

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  //ONE
  answerObj["one"] = answer;
  
  rl.question("What's an activity you like doing? ", (answer2) => {
    answerObj["two"] = answer2;
    //TWO
    
  
    rl.question("What do you listen to while doing that? ", (answer) => {
      answerObj["three"] = answer;
      //THREE
    
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        answerObj["four"] = answer;
        //FOUR
      
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answerObj["five"] = answer;
          //FIVE
        
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answerObj["six"] = answer;
            //SIX
          
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              answerObj["seven"] = answer;
              //SEVEN
            console.log(paragraphPrint(answerObj));
            rl.close();
                      
            })
          })

        })
      })
    })

  })
});

  
