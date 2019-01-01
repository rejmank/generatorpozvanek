import * as b from 'bobril';

export interface IHeader {
    text: string
}

interface IHeaderCtx extends b.IBobrilCtx {
    data : IHeader
}

const Header = b.createComponent<IHeader>({
    render(ctx: IHeaderCtx, me: b.IBobrilNode) {
        me.tag = "h1";
        me.children = [ctx.data.text]
        me.style = {
            "fontSize" : "1.25em"
        }
    }
});

export default Header;