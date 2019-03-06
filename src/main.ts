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
import Heading from './components/Heading';

export const main = b.createComponent({
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
    me.children = [
     Heading(),
      {
        tag: "div",
        style: {
          display: "flex",
          flexWrap: "wrap-reverse",
          alignItems: "flex-end",
          paddingLeft : "1em",
          paddingRight : "1em"
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
                    text: store.header,
                    fontSize : window.innerWidth > 650 ? "1.2em" : `${window.innerWidth * (1.2/655)}em`
                  }),
                  Content({
                    text: store.content,
                    fontSize : window.innerWidth > 650 ? "0.9em" : `${window.innerWidth * (0.9/655)}em`
                  }),
                  Footer({
                    text: store.footer,
                    fontSize : window.innerWidth > 650 ? "1em" : `${window.innerWidth * (0.95/655)}em`
                  }),
                  {
                    tag : "img",
                    attrs: {
                      src: b.asset('./assets/SKAUT_Logo.svg') ,
                    },
                    style: {
                      height: '15%',
                      position: 'absolute',
                      left: '0',
                      bottom: '1.2rem',
                      marginLeft: '1rem'
                    }
                  }
                ]
              }
            ]
          }),
          {
            // div with default diplay:none on its class, displays while print
            tag: "div",
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
                        text: store.header,
                        fontSize : window.innerWidth > 650 ? "1.2em" : `${window.innerWidth * (1.2/655)}em`
                      }),
                      Content({
                        text: store.content,
                        fontSize : window.innerWidth > 650 ? "0.9em" : `${window.innerWidth * (0.9/655)}em`
                      }),
                      Footer({
                        text: store.footer,
                        fontSize : window.innerWidth > 650 ? "1em" : `${window.innerWidth * (0.95/655)}em`
                      }),
                      {
                        tag : "img",
                        attrs: {
                          src: b.asset('./assets/SKAUT_Logo.svg') ,
                        },
                        style: {
                          height: '15%',
                          position: 'absolute',
                          left: '0',
                          bottom: '1.2rem',
                          marginLeft: '1rem'
                        }
                      }
                    ]
                  }
                ]
              })
            ],
            attrs: {
              id: "onlyForPring"
            },
            style: {
              display: "none"
            }
          },

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
              })
            ]
          })
        ],
        attrs : {
          id : "print-container" 
         }
      },
      
    ];
  }
});

export default main;
