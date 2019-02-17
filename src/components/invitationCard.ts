import * as b from "bobril";
import Shape from "./shape";

export interface IInvitationCardData {
  lefPart?: [b.IBobrilNode];
  rightPart?: [b.IBobrilNode];
}

interface IInvitationCardCtx extends b.IBobrilCtx {
  data: IInvitationCardData;
}

export const InvitationCard = b.createComponent<IInvitationCardData>({
  render(ctx: IInvitationCardCtx, me: b.IBobrilNode) {
    (me.tag = "div"),
      (me.children = [
        {
          tag: "div",
          children: [
            ctx.data.rightPart.map(item => {
              return { tag: "div", children: [item] , style: {
                paddingLeft: '1rem',
                paddingRight: '2.5rem',
                height: '100%',
                position: 'relative'
              }};
            })
          ],
          style: {
            width: "40%",
            margin: "1rem"
          }
        },

        Shape({
          headerText: "zabal si s sebou:",
          items: ctx.data.lefPart
        })
      ]),
      (me.style = {
        display: "flex",
        boxShadow: "1px 1px 10px",
        height:
          window.innerWidth > 650
            ? "452px"
            : window.innerWidth * (452 / 640) + "px",
        width:
          window.innerWidth > 640 ? "640px" : window.innerWidth - 10 + "px",
        padding: "1rem",
        backgroundColor: ""
      }),
      (me.attrs = {
        id: "card"
      });
  }
});

export default InvitationCard;
