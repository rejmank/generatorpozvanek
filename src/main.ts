import * as b from "bobril";
import invitationCard from './components/invitationCard';
import Things from './components/things';
import Content from './components/content';
import Header from './components/Header';
import Footer from './components/footer';
import editingSection from './components/editingSection';
import { store } from './store';
import SelectThing from './components/slectingThing';
import Input from './components/input';


export const main = b.createComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        me.children = [
            invitationCard({
                lefPart: [Things({
                    things : store.things
                })],
                rightPart: [{
                    tag: "div",
                    children : [Header({
                        text: store.header
                    }),Content({
                        text : store.content,
                    }),
                Footer({
                    text: store.footer
                })]
                }]
            }),editingSection({ content : [  
                SelectThing({
                    things : store.things
                }),
                Header({text: 'Nadpis'}),
                Input({
                    onchange : (header : string) => store.header =  header,
                    text : store.header

                }),
                Header({text: 'Obsah'}),
                Input({
                    onchange : (content : string) => store.content =  content,
                    text : store.content

                }),
                Header({text: 'Padička'}),
                Input({
                    onchange : (footer : string) => store.footer =  footer,
                    text : store.footer

                })
            ]})
            
        ],
        me.style = {
            "display": "flex"
        }

    }
});

export default main;