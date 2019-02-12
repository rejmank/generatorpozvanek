import * as b from "bobril";
import Header from "./Header";

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
        {
          tag: "div",
          children: [
            {
              tag: "div",
              children: [
                Header({
                  text: "Zabal si s sebou:"
                })
              ],
              style : {
                textAlign : 'center',
                marginLeft: '25%',
                marginRight : '25%'
              }
            },
            ctx.data.lefPart.map(item => item)
          ],
          style: {
            backgroundImage: `url(${b.asset("../assets/tvar.svg")})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "50%",
            padding: "1rem"
          }
        }
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
        padding: "1px",
        backgroundColor: ""
      }),
      (me.attrs = {
        id: "card",
        class: "card"
      });
  }
});

export default InvitationCard;
