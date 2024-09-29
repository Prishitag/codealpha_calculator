let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if the button pressed is "="
        if (e.target.innerHTML === '=') {
            try {
                // Evaluate the string and update input value
                string = eval(string);
                input.value = string;
            } catch (error) {
                // Handle any errors that occur during eval
                input.value = "Error";
                string = ""; // Clear the string for further calculations
            }
        } else if (e.target.innerHTML === 'AC') {
            // Clear the input and string
            string = "";
            input.value = "0"; // Reset to 0
        } else if (e.target.innerHTML === 'DEL') {
            // Delete the last character
            string = string.slice(0, -1);
            input.value = string || "0"; // Display 0 if string is empty
        } else {
            // Append the button's innerHTML to the string
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
