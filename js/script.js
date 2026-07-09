


function toggleMenu() {

    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");

   

}



function loadfoodImage(imageId, meal) {

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
     document.getElementById(imageId).src = data.meals[0].strMealThumb;

    })
    .catch(error => console.log(error));



}



loadfoodImage("food1", "Chicken");
loadfoodImage("food2", "Beef");
loadfoodImage("food3", "Lamb");
loadfoodImage("food4", "Rice");
loadfoodImage("food5", "Basta");
loadfoodImage("food6" , "Breakfast");