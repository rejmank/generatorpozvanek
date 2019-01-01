import * as b from 'bobril';
import Input from './input';
import { store } from '../store';

export interface IContent {
    text: string,
    isEditing : boolean;
}

interface IContentCtx extends b.IBobrilCtx {
    data : IContent
}

const Content = b.createComponent<IContent>({
    render(ctx: IContentCtx, me: b.IBobrilNode) {
        me.tag = "div";
        me.children = [ctx.data.isEditing ? Input({
            text : ctx.data.text,
            onchange : (newValue) => ctx.data.text = newValue 
        }) : ctx.data.text],
        me.style = {
            "width" : "100%",
            "height" : "100%"
        }
    },
    onClick(ctx: IContentCtx): boolean {
        ctx.data.isEditing = true;
        b.invalidate(ctx);
        return true;
    },
    onFocusOut(ctx: IContentCtx){
        ctx.data.isEditing = false;
        store.content = ctx.data.text;
    }
});

export default Content;