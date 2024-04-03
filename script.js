// Function to calculate and 
// update values when t
// he Bill Total input changes
function calc1() {

    // Get the bill total from the 
    // input field and round it to 2 decimal places
    let total = parseFloat(document.getElementById("total").value).toFixed(2);

    // Check if the total is less than 0 (negative)
    if (total < 0) {
        // Set tip-related fields to 0 and disable the tip input
        document.getElementById("tip").value = 0;
        document.getElementById("tipPercent").value = 0;
        document.getElementById("tipAmount").value = 0;
        document.getElementById("totalWithTip").value = 0;
        document.getElementById("tip").disabled = true;
        
        // Display an error message
        document.getElementById("errorMsg").innerHTML = "Enter a valid amount";
    } else {
        // Clear the error message
        document.getElementById("errorMsg").innerHTML = "";
        
        // Enable the tip input and calculate tip-related values
        document.getElementById("tip").disabled = false;
        calc2();
    }
}

// Function to calculate tip-related values
function calc2() {
    
    // Get the bill total and tip percentage from input fields
    let total = parseFloat(document.getElementById("total").value);
    let tip = parseInt(document.getElementById("tip").value);
    
    // Display the tip percentage
    document.getElementById("tipPercent").value = tip;
    
    // Calculate the tip amount and display it, rounding to 2 decimal places
    let ans1 = total * tip / 100;
    document.getElementById("tipAmount").value = ans1.toFixed(2);
    
    // Calculate the total bill with tip and display it, rounding to 2 decimal places
    let ans2 = total + (total * tip / 100);
    document.getElementById("totalWithTip").value = ans2.toFixed(2);
}