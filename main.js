
setInterval(updateTime, 1000);
updateTime();

function updateTime() {
    const now = new Date();

    document.getElementById("time").innerText = now .toLocaleTimeString();
    document.getElementById("date").innerText = now.toLocaleDateString();
}

// setInterval(updateTime, 1000);
// updateTime();


function calculator() {
    // Get values from input fields
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers!";
        return;
    }

    // Calculate total
    let total = num1 + num2;

    // Display result
    document.getElementById("result").textContent = "Total: " + total;
}

