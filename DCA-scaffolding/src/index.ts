import Card, { Attribute } from "./components/card/card";
import {mydata} from "./data";
import button, { AttributeButton } from "./components/button/button";

import "./components/export"

class AppContainer extends HTMLElement {

    mydata : Card []=[]
    button: button[]=[]
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    async connectedCallBack(){

    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=''
            const something = this.ownerDocument.createElement('div');
        }
    }
}

customElements.define('app-container', AppContainer)
