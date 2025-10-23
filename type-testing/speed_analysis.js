const testText = [
    "The quick brown fox jumps over the lazy dog.",
    "The paintbrush was angry at the color the artist chose to use.",
    "Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn’t and they don’t recommend anyone else do it either.",
    "Bill ran from the giraffe toward the dolphin."
]

let randomText = testText[Math.floor(Math.random() * testText.length)]
let startTime, endTime

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    
    document.getElementById("output").innerHTML = "";
    
    // Start timer
    startTime = new Date().getTime();
    }

    function endTest() {
        endTime = new Date().getTime();

        // Disable user input
        document.getElementById("userInput").readOnly = true;

        // Calculate time elapsed and words per minute (WPM)
        let timeElapsed = (endTime - startTime) / 1000; // in seconds
        let userTypedText = document.getElementById("userInput").value;

        // Split the text using regex to count words correctly
        let typedWords = userTypedText.split(/\s+/).filter(function (word) {
            return word !== "";
        }).length;

        let wpm = 0; // Default value

        if (timeElapsed !== 0 && !isNaN(typedWords)) {
            wpm = Math.round((typedWords / timeElapsed) * 60);
        }

        // Display the results
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
            "<p>Words Typed: " + typedWords + "</p>" +
            "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
            "<p>Words Per Minute (WPM): " + wpm + "</p>";
        }