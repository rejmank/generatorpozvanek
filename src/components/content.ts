import * as b from 'bobril';

export interface IContent {
    text: string
}

interface IContentCtx extends b.IBobrilCtx {
    data : IContent
}

const Content = b.createComponent<IContent>({
    render(ctx: IContentCtx, me: b.IBobrilNode) {
        me.tag = "div";
        me.children = [ctx.data.text]
    }
});

export default Content;