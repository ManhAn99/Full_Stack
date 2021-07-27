const $template = document.createElement('template');
$template.innerHTML =`
      <div class = 'input-container'>
        <input class ='input-main' placeholder = 'Enter' type = 'text'>
       
         </div>

`;

export default class InputContainer extends HTMLElement{
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$main = this.querySelector('.input-main');
       
        
    }
     get value() {
         return this.$main.value;
     }

    static get observedAttributes() {
        return ['placeholder', ]
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'placeholder') {
            this.$main.placeholder = newValue;
        }
      
    }
    clear() {
        this.$main.value = ''
    }
   
}
window.customElements.define('input-container', InputContainer)