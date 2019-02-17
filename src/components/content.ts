import * as b from 'bobril';
import {Converter} from 'showdown'

let converter = new Converter();

export interface IContent {
    text : string,
    fontSize? : string
}

interface IContentCtx extends b.IBobrilCtx {
    data : IContent
}

const Content = b.createComponent<IContent>({
    render(ctx: IContentCtx, me: b.IBobrilNode) {
        me.tag = "div";
        me.attrs = {
            innerHTML : converter.makeHtml(ctx.data.text) 
        }
        me.children = [],
        me.style = {
            "width" : "100%",
            "height" : "100%",
            "fontSize" : ctx.data.fontSize ? ctx.data.fontSize : "1em",
            color: '#9a158f'
        }
    },

});

export default Content;