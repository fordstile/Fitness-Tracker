document.getElementById("get-started-btn").addEventListener("click", function() {
    alert("Get ready to track your fitness journey!");
});

// Nutrition form submission
document.getElementById("nutrition-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const foodItem = document.getElementById("food-item").value;
    const calories = document.getElementById("calories").value;
    alert(`Added: ${foodItem} - ${calories} calories`);
});
