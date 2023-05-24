function getBotResponse(input) {
    //rock paper scissors
    if (input == "Hi") {
        return "Hello";
    } else if (input == "who are you") {
        return "I am Suraj Assistant!";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Thanks are asking! I am still learning! Contact: surajpisal113@gmail.com for more information!";
    }
}