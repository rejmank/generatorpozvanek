import * as b from "bobril";
//import jspdf from 'jspdf';

export interface IInvitationCardData {
    lefPart?: [b.IBobrilNode],
    rightPart?: [b.IBobrilNode];
}

interface IInvitationCardCtx extends b.IBobrilCtx {
    data: IInvitationCardData;
}

export const InvitationCard = b.createComponent<IInvitationCardData>({
    render(ctx: IInvitationCardCtx, me: b.IBobrilNode){
        me.tag = "div",
        me.children = [{
            tag : "div",
            children : ['Zabal si:', ctx.data.lefPart.map(item => item),],
            style: {
                "backgroundImage" : `url(${b.asset('../assets/tvar.svg')})`,
                "backgroundSize": "contain",
                "width" : "40%",
                "backroundRepeat" : "no-repeat",
                "textAlign" : "center",
                "paddingTop" : "1rem",
                "marginTop" : "1rem",
                "marginLeft" : "1rem",
                "marginRight" : "1rem",
                "marginBottom" : "11rem"
            }
        },{
            tag: "div",
            children: [ctx.data.rightPart.map(item => item)],
            style : {
                "width" : "60%"
            }
        }
        ],
        me.style = {
            "display" : "flex",
            "boxShadow": "1px 1px 10px",
            "height" : "37rem",
            "width": "50rem",
            "padding" : "1px"
        }
    }
});

export default InvitationCard;