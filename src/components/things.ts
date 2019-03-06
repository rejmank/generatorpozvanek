import * as b from "bobril";
import { thing } from "../store";

export interface IThings {
  things: thing[];
  color? : string;
}

interface IThingsCtx extends b.IBobrilCtx {
  data: IThings;
}

export const Things = b.createComponent<IThings>({
  render(ctx: IThingsCtx, me: b.IBobrilNode) {
    me.tag = "div";
    me.children = [
      ctx.data.things
        .filter(item => item.selected)
        .map((item, i) => {
          return {
            tag: "div",
            children: [
              "☐",
              {
                tag: "div",
                children: [item.name],
                style: { paddingLeft: "0.5rem" }
              }
            ],
            style: {
              maxWidth: "50%",
              display: "flex",
              color: ctx.data.color? ctx.data.color : '#9a158f'
            }
          };
        })
    ];
    me.style = {
      fontSize: "1rem",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      maxHeight: "70%",
      justifyContent: "space-between",
      marginBottom: "1.25rem",
      marginLeft: "1rem",
      marginRight: "1rem"
    };
  }
});

export default Things;
