import * as b from "bobril";

export interface IFooter {
  text: string;
}

interface IFooterCtx extends b.IBobrilCtx {
  data: IFooter;
}

const Footer = b.createComponent<IFooter>({
  render(ctx: IFooterCtx, me: b.IBobrilNode) {
    me.tag = "div";
    me.children = [ctx.data.text];
    me.style = {
      fontSize: "1.55em",
      "padding-top": "2rem"
    };
  }
});

export default Footer;
