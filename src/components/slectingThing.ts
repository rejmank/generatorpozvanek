import * as b from 'bobril';
import { thing } from '../store';
import SelectableThing from './selectableThing';
import AddItem from './addItem';

export interface ISelectThing {
    things: thing[];
}

interface ISelectThingCtx extends b.IBobrilCtx {
    data : ISelectThing
}

const SelectThing = b.createComponent<ISelectThing>({
    render(ctx: ISelectThingCtx, me: b.IBobrilNode) {
        me.tag = "h1";
        me.children = [ctx.data.things.map(item => SelectableThing({
            item : item
        })),
       AddItem()  
    ],
    me.style = {
        "marginRight" : '1.5rem'
    }
    }
    
});

export default SelectThing; 