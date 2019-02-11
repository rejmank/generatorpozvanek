import * as b from "bobril";
import { thing, store } from '../store';


export interface ISelectableThingData {
    item : thing;
}

interface ISelectableThingCtx extends b.IBobrilCtx {
    data: ISelectableThingData;
}

export const SelectableThing = b.createComponent<ISelectableThingData>({
    render(ctx: ISelectableThingCtx, me: b.IBobrilNode){
        me.tag = "div",
        me.children = [{
            tag : "input",
            attrs : {
               type : "checkbox",
               value: ctx.data.item.selected
               
           }
        },{
            tag: "div",
            children: [ctx.data.item.name.slice(1, ctx.data.item.name.length)]
        }
        ],
        me.style = {
            "display" : "flex",
        }   
    },
    onClick(ctx: ISelectableThingCtx) : boolean {
        store.toggleThing(ctx.data.item.id);
        return true;   
    }
});

export default SelectableThing;