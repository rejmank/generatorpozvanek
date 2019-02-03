import * as b from 'bobril';

export interface IHeader {
    text: string,
    fontSize? : string,
}

interface IHeaderCtx extends b.IBobrilCtx {
    data : IHeader
}

const Header = b.createComponent<IHeader>({
    render(ctx: IHeaderCtx, me: b.IBobrilNode) {
        me.tag = "h2";
        me.children = [ctx.data.text]
        me.style = {
            "fontSize" : ctx.data.fontSize ? ctx.data.fontSize : `1.8em`,
        }
    }
});

export default Header;