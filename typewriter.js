const sentence = "hello there from lighthouse labs";

const typewriter = () => {
  //counter var to establish 50ms between charaters
  let timeout = 0;
  //Loop through sentence
  for (let i = 0; i < sentence.length; i++) {
    //uses loop iteration to count to 50ms and stores that value in timeout var
    timeout += 50;
    // setTimeout function compares the character to see if it is the end of
    // the sentence and creates a new line
    setTimeout(() => {
      if (i === sentence.length - 1) {
        process.stdout.write(sentence[i] + "\n");
      } else {
        // If it is not the end of the sentence it prints the letter
        process.stdout.write(sentence[i]);
      }
    }, timeout);
  }
};

typewriter(sententence);


