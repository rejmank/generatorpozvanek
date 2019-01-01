import * as b from 'bobril';

export interface IButton {
    text: string,
    onclick: ()=> void;
}

interface IButtonCtx extends b.IBobrilCtx {
    data : IButton
}

const Button = b.createComponent<IButton>({
    render(ctx: IButtonCtx, me: b.IBobrilNode) {
        me.tag = "Button";
        me.attrs = {
            value : ctx.data.text
        }
    },
    onClick(ctx: IButtonCtx): boolean {
        ctx.data.onclick();
        return true;
    }
});

export default Button;