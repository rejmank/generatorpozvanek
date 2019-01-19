import * as b from 'bobril';

export interface IInput {
    text: string,
    onchange: (newValue: string) => void,
}

interface IInputCtx extends b.IBobrilCtx {
    data : IInput
}

const Input = b.createComponent<IInput>({
    render(ctx: IInputCtx, me: b.IBobrilNode) {
        me.tag = "textarea";
        me.attrs = {
            value: ctx.data.text,
            rows : ctx.data.text.length / 60,
            cols : 58
        },
        me.style = {
            'display' : 'block',
            'width' : '100%',
        }
    },
    onChange(ctx: IInputCtx, newValue: string): void {
        ctx.data.onchange(newValue);
    }
});

export default Input;