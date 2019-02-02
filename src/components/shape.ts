import * as b from "bobril";

export interface IInvitationCardData {
  content?: string | number;
  path: string;
}

interface IInvitationCardCtx extends b.IBobrilCtx {
  data: IInvitationCardData;
}

export const InvitationCard = b.createComponent<IInvitationCardData>({
  render(ctx: IInvitationCardCtx, me: b.IBobrilNode) {
    (me.tag = "svg"),
      (me.attrs = {
        width: "90%",
        heigth: "90%",
        viewBox: "0 0 600 800"
      }),
      (me.children = [
        {
          tag: "g",
          children: [
            {
              tag: "path",
              attrs: {
                d: ctx.data.path,

                //transform : `scale(0.6)`,
                width: "100%",
                height: "100%"
              },
              style: {
                fill: "#ffffff",
                fillOpacity: "1"
              }
            },
            {
              tag: "text",
              children: ["Zabal si:"],
              style: {
                fontFamily: "skautbold",
                fontSize: "4em"
              },
              attrs: {
                x: "140",
                y: "90"
              }
            }
          ]
        }
      ]);
  }
});

export default InvitationCard;
