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
    me.tag = "div";
    me.children = [
      {
        tag: "div",
        children: ctx.data.things
          .filter(item => item.selected)
          .map(item => {
            return { tag: "h5", children: [item.name], style : {'margin' : "0px"} };
          })
      }
    ];
    me.style = {
      display: "block",
      paddingTop: "0.25rem",
      fontSize: "1.25rem"
    };
  }
});

export default Things;
