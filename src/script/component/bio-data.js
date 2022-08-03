class BioData extends HTMLElement {
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = 
        `<style>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding: 30px;
            margin-top: 0px;
            background-color: aqua;

         }
         .card > p{
             font-family: sans-serif;
             font-style:inherit;
             text-align:center;
         } 
        </style>
            <footer>
                <div class = "card">
                <p>Andifa Naufal Rahman  &#169; 2020, Dicoding Academy 2020,Front End Web Developer,andifanaufal@gmail.com</p>
                </div>
            </footer>

        `
    }
}
customElements.define("bio-data",BioData)