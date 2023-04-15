export enum Attribute{
    "value"="value",
    "url" = "url",
    "icon_url" = "icon_url",
}

class Card extends HTMLElement{
    value?: string
    url?:string
    icon_url?:string

    
    constructor(){
       super();
       this.attachShadow({mode:"open"}) 
    }

     static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            value: null,
            url:null,
            icon_url:null,
        };
        return Object.keys(attrs);
    }

    attributeChangeCallBack(porpName: Attribute,
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
        this.shadowRoot.innerHTML=''
        const card = this.ownerDocument.createElement('div')
    }
}
}

customElements.define('my-card', Card);
export default Card;
   