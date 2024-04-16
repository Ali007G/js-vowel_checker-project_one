
/* This checkVowel function is responsible for counting the number of vowels 
    in the text entered by the user. */
function checkVowel() {

    // Getting the value of the input field with the id "inputText"
    var text  = document.getElementById("inputText").value;

    // Initializing a variable to store the count of vowels found in the text
    var vowelCount = 0;

    //Converting the input text to lowercase to make the comparison
    text = text.toLowerCase();

    // loop through each character in the text
    for(var i=0; i<text.length;i++)
    {

        // Getting the character at the current index
        var char = text.charAt(i);

        // Checking if the current character is a vowel by calling the isVowel function
        if(isVowel(char))
        {
            // Incrementing the vowel count if the current character is a vowel
            vowelCount++;
        }
    }

    // Getting the result element by its id
    var result = document.getElementById("result");

    // Setting the text content of the result element to display the total count of vowels found
    result.textContent = "Total Vowels: " +vowelCount;
}

// Function to check if a character is a vowel
function isVowel(char) {
    // Array containing all the lowercase vowels
    var vowels = ["a","e","i","o","u"];

    // Checking if the character is included in the vowels array
    return vowels.includes(char);

}