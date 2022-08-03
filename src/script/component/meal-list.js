import '../component/meal-item.js'
class MealList extends HTMLElement{
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode :"open"})
    }
    set meals (meals){
        this._meals = meals;
        this.render();

    }
    renderError (message) {
        const NotFound = alert (`${message}`)
    }
    render () {
        this._shadowDOM.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement  = document.createElement("meal-item");
            mealItemElement.meal = meal;
            this._shadowDOM.appendChild(mealItemElement);
            
        });
    }
   
} 
customElements.define("meal-list",MealList);