function calculateArea() {
     let radius = parseFloat(prompt("Enter the radius of the circle:"));

    // Check if the input is a valid positive number
    if (radius > 0) {
       let area = Math.PI * Math.pow(radius, 2);

         let roundedArea = area.toFixed(2);
 alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
    } else {
        alert("Please enter a valid positive number for the radius.");
    }
}

// Call the function
calculateArea();
