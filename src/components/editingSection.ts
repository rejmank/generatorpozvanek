import * as b from 'bobril';


export interface IEditingSection {
    leftPart?: b.IBobrilNode<any>[],
    rigthPart?: b.IBobrilNode<any>[]
}

interface IEditingSectionCtx extends b.IBobrilCtx {
    data : IEditingSection
}

const EditingSection = b.createComponent<IEditingSection>({
    render(ctx: IEditingSectionCtx, me: b.IBobrilNode) {
        me.tag = "div";
        me.children = [ctx.data.leftPart.map(item => item), {
            tag : 'div',
            children : ctx.data.rigthPart.map(item => item)
        }]
        me.style = {
            'display' : 'flex',
            'paddingLeft' : '5rem',
            'margin' : '1rem'
        }
    },
});

export default EditingSection;