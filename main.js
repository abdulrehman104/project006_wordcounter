import inquirer from "inquirer";
async function wordCounter() {
    const input = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: "Enter your sentnce here:",
        },
    ]);
    // Format Sentence:
    // replace() function replace symbole to null string,
    // trim() function  remoce the spaces in the sentence.
    let formattedSentence = input.sentence
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .trim("");
    // Slpit words and print the count of words
    let wordCount = formattedSentence.split(" ").length;
    console.log(`The sentence has ${wordCount} ${wordCount === 1 ? 'word' : 'words'}.`);
}
wordCounter();
