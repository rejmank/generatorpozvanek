import * as b from "bobril";
import { thing } from '../store';

export interface IThings {
    things: thing[];
}

interface IThingsCtx extends b.IBobrilCtx {
    data: IThings;
}

export const Things = b.createComponent<IThings>({
    render(ctx: IThingsCtx, me: b.IBobrilNode) {
        me.tag = "div";
        me.children = [{
            tag: "div",
            children: ctx.data.things.filter(item => item.selected)
            .map(item => {return {tag: "div", children : [item.name]}}),
        }]
        me.style = {
            "display" : "block",
            "paddingTop" : "2rem",
            "fontSize" : "1.25rem"
        }
    }
});

export default Things;