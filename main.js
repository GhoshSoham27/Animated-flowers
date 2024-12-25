// onload = () =>{
//     document.body.classList.remove("container");
// };

window.onload = () => {
    // Wait for flowers animation to finish
    setTimeout(() => {
        // Create the "Merry Christmas Ishika" message element
        document.body.classList.remove("container");
        const message = document.createElement("div");
        message.id = "christmas-message";
        message.textContent = "Merry Christmas Ishika";

        // Append the message to the body
        document.body.appendChild(message);

        // Smoothly fade in the message
        setTimeout(() => {
            message.style.opacity = "1"; // Make the message visible
        }, 100); // Slight delay for transition effect
    }, 1000); // Adjust this timeout to match the flower popping duration
};