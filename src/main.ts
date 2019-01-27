import * as b from "bobril";
import invitationCard from "./components/invitationCard";
import Things from "./components/things";
import Content from "./components/content";
import Header from "./components/Header";
import Footer from "./components/footer";
import editingSection from "./components/editingSection";
import { store } from "./store";
import SelectThing from "./components/slectingThing";
import Input from "./components/input";

let isPrint = false;

export const main = b.createComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
    (me.children = [
      {
        tag: "h1",
        children: ["Generátor pozvánek"],
        attrs : {
          id : "header"
        }
      },
      {
        tag: "div",
        style: {
          display: "flex",
          flexWrap: "wrap-reverse",
          alignItems: "flex-end"
        },
        children: [ 
          invitationCard({
            lefPart: [
              Things({
                things: store.things
              })
            ],
            rightPart: [
              {
                tag: "div",
                children: [
                  Header({
                    text: store.header
                  }),
                  Content({
                    text: store.content
                  }),
                  Footer({
                    text: store.footer
                  })
                ]
              }
            ]
          }),

          editingSection({
            leftPart: [
              SelectThing({
                things: store.things
              })
            ],
            rigthPart: [
              Header({ text: "Nadpis" }),
              Input({
                onchange: (header: string) => (store.header = header),
                text: store.header
              }),
              Header({ text: "Obsah" }),
              Input({
                onchange: (content: string) => (store.content = content),
                text: store.content
              }),
              Header({ text: "Patička" }),
              Input({
                onchange: (footer: string) => (store.footer = footer),
                text: store.footer
              }),
            ]
          })
        ]
      }
    ])
  }
});

window.onbeforeprint = function() {
  console.log('onBefore');
  isPrint = true;
}

window.print = function() {
  console.log('onBefore');
  isPrint = true;
}

window.onafterprint = function() {
  isPrint = false;
}

export default main;
