import * as b from "bobril";

export interface ItoggleData {
    thumbnail : string;
    state: boolean;
    toToggle: () => void;
}

interface ItoggleCtx extends b.IBobrilCtx {
    data: ItoggleData;
}

export const toggle = b.createComponent<ItoggleData>({
    render(ctx: ItoggleCtx, me: b.IBobrilNode){
        me.tag = "div",
        me.children = [{
            tag : "input",
            attrs : {
               type : "checkbox",
               value: ctx.data.state
               
           }
        },{
            tag: "div",
            children: [ctx.data.thumbnail]
        }
        ],
        me.style = {
            "display" : "flex",
        }   
    },
    onClick(ctx: ItoggleCtx) : boolean {
        ctx.data.toToggle();
        return true;   
    }
});

export default toggle;