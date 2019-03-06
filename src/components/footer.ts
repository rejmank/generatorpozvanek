import * as b from "bobril";

export interface IFooter {
  text: string;
  fontSize? : string;
  color? : string;
}

interface IFooterCtx extends b.IBobrilCtx {
  data: IFooter;
}

const Footer = b.createComponent<IFooter>({
  render(ctx: IFooterCtx, me: b.IBobrilNode) {
    me.tag = "div";
    me.children = [ctx.data.text];
    me.style = {
      fontSize: ctx.data.fontSize ? ctx.data.fontSize : "1em",
      color:  ctx.data.color ?  ctx.data.color : '#000',
      fontStyle: 'italic'
    };
  }
});

export default Footer;
