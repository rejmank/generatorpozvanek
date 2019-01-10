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
            value: ctx.data.text
        },
        me.style = {
            'boxSizing' : 'border-box',
            'height' : 'auto',
            'display' : 'block',
        }
    },
    onChange(ctx: IInputCtx, newValue: string): void {
        ctx.data.onchange(newValue);
    }
});

export default Input;