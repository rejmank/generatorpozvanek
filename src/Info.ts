import * as b from 'bobril';


interface IInfoCtx extends b.IBobrilCtx {
};


const Info = b.createComponent({
    render(ctx: IInfoCtx, me: b.IBobrilNode) {
        me.tag = "div";
        me.children = [`Ahoj, 
            vítej na generátoru pozvánek. Můžeš si tu jednoduše vytvořit pozvánku na výpravu v oficiálním skautském stylu. 
            Pozvánku můžeš editovat na pravé straně obrazovky. Obsah podporuje markdown syntaxi, pokud nevíš co to je podívej se sem https://www.markdownguide.org/basic-syntax/.
            Ve chvíli kdy máš pozvánku hotovou stačí zmáčknout ctrl + p (nebo tisk) a můžeš pozvánku buď rovnou vytisknout, nebo stáhnout jako pdf. 
            . Pokud máš nějaké další dotazy neváhej mi napsat na j.rejman@protonmail.com
            Koumal`
            ]
    }
});

export default Info;