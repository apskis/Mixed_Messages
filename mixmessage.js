// Define arrays with different pieces of data for the meme generator
const starters = [
    "That moment when",
    "When you realize",
    "When someone asks",
    "When you see",
    "That feeling when",
  ];
  
  const actions = [
    "you accidentally step on a poop and break the laws of physics",
    "a secret poop cult plotting to take over the world",
    "you witness a poop-eating contest with questionable winners",
    "you find a cursed toilet that grants wishes with disastrous outcomes",
    "you encounter a talking poop that offers sarcastic life advice",
  ];
  
  const endings = [
    "and you discover that the alien guy was right all along",
    "and you wish you didn't eat that special brownie before work",
    "and you didn't realize how insane you are until this very moment",
    "and \"whatever\"",
    "and you want to go walk into the ocean and never be seen again",
  ];
  
  // Function to generate a random meme-like phrase
  const generateMeme = () => {
    // Select a random starter, action, and ending
    const starter = starters[Math.floor(Math.random() * starters.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];
  
    // Combine the parts into a final meme
    return `${starter} ${action} ${ending}`;
  };
  
  // Generate and display a random meme
  console.log(generateMeme());
  