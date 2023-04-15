export enum AttributeButton{
    "btn_joke"="btn_joke",
    "animal"="animal"
}

class button extends HTMLElement{
    btn_joke?: string
    animal?:string
    
    constructor(){
       super();
       this.attachShadow({mode:"open"}) 
    }

     static get observedAttributes(){
        const attrs: Record<AttributeButton, null> = {
            btn_joke: null,
            animal: null,
    
        };
        return Object.keys(attrs);
    }

    attributeChangeCallBack(porpName: AttributeButton,
        _: string | undefined,
        NewValue: string | undefined){
        switch(porpName){
            default:
            this[porpName] = NewValue;
            break;
        }

    }
    connectCallBack(){
        this.render
    }
render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML='<button>${this.animal}</button>'
    }
}
}

customElements.define('my-button', button);
export default button;
   