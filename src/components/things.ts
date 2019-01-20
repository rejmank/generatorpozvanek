import * as b from "bobril";
import { thing } from "../store";

export interface IThings {
  things: thing[];
}

interface IThingsCtx extends b.IBobrilCtx {
  data: IThings;
}

export const Things = b.createComponent<IThings>({
  render(ctx: IThingsCtx, me: b.IBobrilNode) {
    me.tag = "text";
    me.children = [
      ctx.data.things.filter(item => item.selected).map((item, i) => {
        return {
          tag : "tspan",
          children : [item.name],
          attrs : {
            x : 170,
            y : 80 + 25 * i
          }
        }
        })
    ];
    me.style = {
      textAnchor : 'middle',
      fontSize: "1.55rem"
    };
  }
});

export default Things;
