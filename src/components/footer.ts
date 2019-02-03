import * as b from "bobril";

export interface IFooter {
  text: string;
  fontSize? : string;
}

interface IFooterCtx extends b.IBobrilCtx {
  data: IFooter;
}

const Footer = b.createComponent<IFooter>({
  render(ctx: IFooterCtx, me: b.IBobrilNode) {
    me.tag = "div";
    me.children = [ctx.data.text];
    me.style = {
      fontSize: ctx.data.fontSize ? ctx.data.fontSize : "1.55em",
      "padding-top": "1rem"
    };
  }
});

export default Footer;
