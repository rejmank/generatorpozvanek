import * as b from "bobril";

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
            children : [ ctx.data.lefPart.map(item => item),],
            style: {
                "backgroundImage" : `url(${b.asset('../assets/tvar.svg')})`,
                "background-size": "cover",
                "width" : "120em"
            }
        },{
            tag: "div",
            children: [ctx.data.rightPart.map(item => item)]
        }
        ],
        me.style = {
            "display" : "flex",
            "boxShadow": "1px 1px 10px",
            "height" : "35em",
            "width": "50em",
            "padding" : "1px"
        }
    }
});

export default InvitationCard;