import * as b from "bobril";
import Header from './Header';
import { store } from '../store';

export interface IShapeData {
  headerText: string,
  items: [b.IBobrilNode]
}

interface IShapeCtx extends b.IBobrilCtx {
  data: IShapeData;
}

export const Shape = b.createComponent<IShapeData>({
  render(ctx: IShapeCtx, me: b.IBobrilNode) {
    
      me.tag = "div",
      me.children = [
        {
          tag: "div",
          children: [
            Header({
              text: "Zabal si s sebou:",
              fontSize: '1.1rem',
              color: store.bwMode ? "#2d2d30" : '#5a2591'
            })
          ],
          style : {
            textAlign : 'center',
            marginLeft: '25%',
            marginRight : '25%'
          }
        },
        ctx.data.items.map(item => item)
      ],
      me.style = {
        backgroundImage: store.bwMode? `url(${b.asset("../assets/tvarbw.svg")})` :`url(${b.asset("../assets/tvar.svg")})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "45%",
        padding: "1.3rem",
        marginTop: '1.5rem'
      }
    }
});

export default Shape;
