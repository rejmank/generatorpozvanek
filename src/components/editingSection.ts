import * as b from 'bobril';


export interface IEditingSection {
    content?: b.IBobrilNode<any>[],
}

interface IEditingSectionCtx extends b.IBobrilCtx {
    data : IEditingSection
}

const EditingSection = b.createComponent<IEditingSection>({
    render(ctx: IEditingSectionCtx, me: b.IBobrilNode) {
        me.tag = "div";
        me.children = ctx.data.content.map(item => item);
        me.style = {
            'display' : 'block',
            'paddingLeft' : '5rem'
        }
    },
});

export default EditingSection;