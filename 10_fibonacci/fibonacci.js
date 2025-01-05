const fibonacci = function (n) {
    // Convert string input to a number if it's a string
    n = Number(n);

    // Check if the input is a valid number
    if (isNaN(n) || n < 0) {
        return "OOPS"; // Handle invalid numbers, including negatives
    }

    // Special case for the 0th Fibonacci number
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1; // The 1st Fibonacci number
    } else if (n === 2) {
        return 1; // The 2nd Fibonacci number
    } else {
        // Initialize the first two terms
        let a = 1, b = 1;

        // Compute the nth Fibonacci number
        for (let i = 3; i <= n; i++) {
            let nextTerm = a + b;
            a = b;
            b = nextTerm;
        }

        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;
