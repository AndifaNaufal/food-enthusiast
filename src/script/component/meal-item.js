class MealItem extends HTMLElement {
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({mode:"open"})
    }

    set meal(meal){
        this._meal= meal;
        this.render();
    }
    set clickEvent (event){
        this._clickevent = event;
        this.render();
    }
    

    render() {
        this._shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <div class = "container-fluid">  
        <div class="card text-white bg-info w-auto" >
          <img src = "${this._meal.strMealThumb}"class = "card-img-top" alt = "Meal Thumb">
            <div class="card-body">
              <h5 class="card-title">${this._meal.strMeal}</h5>
              <p class="card-text">${this._meal.strInstructions}</p>
              <a href="${this._meal.strYoutube}" class="btn btn-primary">Click For Video</a>
            </div>
          </div>
          </div>
            `
    }
 }
  

customElements.define("meal-item", MealItem);