import * as b from "bobril";
import Shape from './shape';

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
          children: [ctx.data.rightPart.map(item => item)],
          style: {
            width: "50%",
            margin: "1rem"
          }
        },
         
        Shape({
         headerText : "zabal si s sebou:",
         items : ctx.data.lefPart 
        })
     
      ]),
      (me.style = {
        display: "flex",
        boxShadow: "1px 1px 10px",
        height:
          window.innerWidth > 650
            ? "400px"
            : window.innerWidth * (400 / 650) + "px",
        width:
          window.innerWidth > 650 ? "650px" : window.innerWidth - 10 + "px",
        padding: "1rem",
        backgroundColor: ""
      }),
      (me.attrs = {
        id: "card",
        class: "card"
      });
  }
});

export default InvitationCard;
