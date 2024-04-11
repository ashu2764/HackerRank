//Function to count apples and oranges that land on Sam's house
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Initialize counters for apples and oranges that land on Sam's house
    let appleCount = 0;
    let orangeCount = 0;

    // Loop through each apple's distance and check if it lands on Sam's house
    for (let i = 0; i < apples.length; i++) {
        // Calculate the position where the apple lands
        let applePosition = a + apples[i];
        // Check if the apple lands within the range of Sam's house
        if (applePosition >= s && applePosition <= t) {
            // Increment the apple count if it lands on Sam's house
            appleCount++;
        }
    }

    // Loop through each orange's distance and check if it lands on Sam's house
    for (let j = 0; j < oranges.length; j++) {
        // Calculate the position where the orange lands
        let orangePosition = b + oranges[j];
        // Check if the orange lands within the range of Sam's house
        if (orangePosition >= s && orangePosition <= t) {
            // Increment the orange count if it lands on Sam's house
            orangeCount++;
        }
    }

    // Print the number of apples and oranges that land on Sam's house
    console.log(appleCount);
    console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
/*
1
1
*/