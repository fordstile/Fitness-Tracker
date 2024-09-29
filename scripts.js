document.getElementById("nutrition-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const foodItem = document.getElementById("food-item").value;
    const calories = document.getElementById("calories").value;
    const mealType = document.querySelector('input[name="meal-type"]:checked').value;
    const mealCategory = document.getElementById("meal-category").value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(cb => cb.value);
    const mealDate = document.getElementById("meal-date").value;
    const mealPhoto = document.getElementById("meal-photo").files[0];

    // Example form data summary
    alert(`
        Food Item: ${foodItem}
        Calories: ${calories}
        Meal Type: ${mealType}
        Meal Category: ${mealCategory}
        Ingredients: ${ingredients.join(', ')}
        Date: ${mealDate}
        Photo Uploaded: ${mealPhoto ? 'Yes' : 'No'}
    `);
});
