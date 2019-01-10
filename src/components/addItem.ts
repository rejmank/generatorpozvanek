import * as b from 'bobril';
import { store } from '../store';
import Button from './button';
import Input from './input';


export interface IAddItem {
    name: string
}

interface IAddItemCtx extends b.IBobrilCtx {
    data : IAddItem
}

const AddItem = b.createComponent<IAddItem>({
    render(ctx: IAddItemCtx, me: b.IBobrilNode) {
        me.tag = "div";
        me.children = [
            Button({
            text: '+',
            onclick : () => store.addThing(store.nameOfNewItem)
        }),
        Input({
            text : "",
            onchange : (itemName : string) => store.nameOfNewItem = itemName, 
        })],
        me.style = {
            "padding-top" : "0.3em",
            "display" : "flex"
        }
        
    },
 
});

export default AddItem;