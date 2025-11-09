function planDay() {
    alert("This feature is coming soon! Stay tuned for the interactive planner.");
}       
document.addEventListener("DOMContentLoaded", function() {
    const planButton = document.getElementById("plan-button");
    if (planButton) {
        planButton.addEventListener("click", planDay);
    }
});             
