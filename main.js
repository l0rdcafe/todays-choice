function todaysChoice(choices) {
  if (choices.length === 0) {
    throw new Error("You must provide at least 1 choice");
  }

  if (choices.length === 1) {
    return choices[0];
  }

  const choiceCounts = {};
  choices.forEach((choice) => {
    choiceCounts[choice] = 0;
  });

  while (true) {
    const index = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[index];
    choiceCounts[randomChoice] += 1;

    if (choiceCounts[randomChoice] >= 10) {
      return choices[index];
    }
  }
}

const choice = todaysChoice(process.argv.slice(2));
console.log(`Today's choice is '${choice}'`);
