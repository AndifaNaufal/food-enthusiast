class SearchBar extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode:"open"})

    }
    connectedCallback(){
        this.render();
    }

    set clickEvent (event){
        this._clickevent = event;
        this.render();
    }

    get value () {
        return this._shadowDOM.querySelector("#searchElement").value;
    }

    render(){
        this._shadowDOM.innerHTML = 
        `<style>
        .search-container {
            display: flex;
            position: sticky;
            top: 10px;
            background-color: grey;
            background-blend-mode: lighten;
            height:800px;
            width:100%;
            position:sticky;
            

        }
        .form-inline {
            position:sticky;
            padding:500px;
            padding-top:0px;
            padding-right:inherit;
            padding-left:500px;
            background-position: 1200px;
        }

        @media screen and (max-width:504px){

            .form-inline {
              margin:auto;  
              padding:250px;
              padding-top:0px;
              padding-right:50px;
              padding-bottom:600px;
              display:flex;
            }
            
        
        
            }
        
        
       
        </style>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <div class = "search-container">
        <nav class="navbar navbar-light bg-transparent">
          <div class="form-inline">
            <input class="form-control mr-sm-2" type="search" id = "searchElement" placeholder="Search" aria-label="Search">
            <button id ="searchButtonElement" class="btn btn-danger btn-outline-danger my-0 my-sm-1 text-dark" type="submit">Search</button>
          </div>
        </nav>
        </div>
        `
        this._shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickevent);
    }

}
customElements.define("search-bar",SearchBar)