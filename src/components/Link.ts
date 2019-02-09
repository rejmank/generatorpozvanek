import * as b from "bobril";
import { ISelectThing } from './slectingThing';

export interface ILink {
  to: string,
  component : b.IBobrilNode<any>
}

interface ILinkCtx extends b.IBobrilCtx {
  data: ILink;
}

export const Link = b.createComponent<ILink>({
  render(ctx: ILinkCtx, me: b.IBobrilNode) {
    me.children = [
      ctx.data.component,
    ]; 
  }, 
  onClick(ctx: ILinkCtx, me: b.IBobrilNode) {
    b.runTransition(b.createRedirectPush(ctx.data.to));
    return true;
  }
});

export default Link;
