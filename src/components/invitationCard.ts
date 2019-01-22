import * as b from "bobril";

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
          tag: "svg",
          children: [
            {
              tag: "g",
              children: [
                {
                  tag: "path",
                  attrs: {
                    d:
                      "M 483.6598,13.160775 C 395.59349,-11.971235 323.58344,5.5627247 242.32887,11.407375 165.4533,17.252035 65.223113,31.279185 65.223113,31.279185 29.704643,41.215095 0.51138345,58.749055 0.02483345,137.65185 c 0,64.87563 -1.45965995,351.26355 18.00250955,430.16634 10.70419,43.83488 25.78738,102.86586 61.30584,123.90661 35.518467,21.04075 76.875577,35.65237 199.487267,35.06791 111.90749,0 245.70987,-33.31451 264.19893,-102.86586 9.24453,-35.06792 13.62352,-85.91638 14.59663,-183.52206 1.94622,-214.4987 0.48655,-406.203275 -73.95621,-427.244015 z",
                    transform : "scale(0.6)"
                    },
                  style: {
                    fill: "#6B96CA",
                    "fill-opacity": "1"
                  },
                },
                {
                  tag: "text",
                  children: ["Zabal si:"],
                  style: {
                    fontFamily : "skautbold", 
                    fontSize : "1.8em"
                  },
                  attrs : {
                    x : "90",
                    y : "45"
                  },
                },
                ,
                ctx.data.lefPart.map(item => item)
              ]
            }
          ],
          style: {
            width: "50%",
            textAlign: "center",
            paddingTop: "1rem",
            marginLeft: "1rem"
          }
        },
        {
          tag: "div",
          children: [ctx.data.rightPart.map(item => item)],
          style: {
            width: "50%",
            margin : "1rem"
          }
        }
      ]),
      (me.style = {
        display: "flex",
        boxShadow: "1px 1px 10px",
        height: "30rem",
        width: "50rem",
        padding: "1px",
        backgroundColor: "#A87A93",
      }),
      me.attrs = {
        id : "card",
        class : "card"
      }
  }
});

export default InvitationCard;
