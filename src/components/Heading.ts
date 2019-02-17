import * as b from "bobril";
import Header from "./Header";
import Link from "./Link";

interface IHeadingCtx extends b.IBobrilCtx {}

const Heading = b.createComponent({
  render(ctx: IHeadingCtx, me: b.IBobrilNode) {
    me.tag = "div";
    me.children = [
      Header({
        text: "Generátor pozvánek"
      }),
      Link({
        component: {
          tag: "h1",
          style: {
            paddingRight: "0.5rem"
          }
        },
        to: "/info"
      })
    ];
    me.style = {
      display: "flex",
      heigth: "2rem",
      justifyContent: "space-between",
      marginBottom: "2rem",
      paddingLeft: "0.3rem",
      boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)"
    };
    me.attrs = {
      id : "header"
    }
  }
});

export default Heading;
