//QUANTITY BUTTONS
class WizaahCartQuantity extends HTMLElement {
    constructor() {
      super();
      this.input = this.querySelector('input');
      this.changeEvent = new Event('change', { bubbles: false })
  
      this.querySelectorAll('button').forEach(
        (button) => button.addEventListener('click', this.onButtonClick.bind(this))
      );
  
      this.input.addEventListener('change', this.onInputChange.bind(this));
    }
  
    onButtonClick(event) {
      event.preventDefault();
      const previousValue = this.input.value;
      
      event.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown();
      if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
    }
  
    onInputChange(event) {
      const wizaahCart = this.closest('wizaah-cart');    
      wizaahCart.updateQuantity(this.dataset.itemKey, event.target.value);
    }
  }
  customElements.define('wizaah-cart-quantity', WizaahCartQuantity);