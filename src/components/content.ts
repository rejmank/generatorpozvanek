import * as b from 'bobril';
import {Converter} from 'showdown'

let converter = new Converter();

export interface IContent {
    text : string,
    fontSize? : string,
    color?: string,
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
            color:  ctx.data.color ?  ctx.data.color : '#000'
        }
    },

});

export default Content;