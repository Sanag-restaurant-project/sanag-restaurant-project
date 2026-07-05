async function heroImage(){
        try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');

        const data = await response.json();

        console.log(data);

        const  meals = data.meals;


        const slots = document.querySelectorAll('.hero-img-slot');

        slots.forEach((slot, index) => {
            if (meals[index]) {
                slot.src = meals[index].strMealThumb;
            }
        
        });
    }
    catch(error){
        console.error('Error fetching hero images:', error);
    }



}
heroImage();