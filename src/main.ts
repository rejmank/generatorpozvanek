import * as b from "bobril";
import invitationCard from './components/invitationCard';
import Things from './components/things';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import { store } from './store';
import SelectThing from './components/slectingThings';




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
                        isEditing : false
                    }),
                Footer({
                    text: store.footer
                })]
                }]
            }),
            SelectThing({
                things : store.things
            })
        ],
        me.style = {
            "display": "flex"
        }

    }
});

export default main;