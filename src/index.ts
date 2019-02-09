import * as b from "bobril";
import main from "./main";
import Info from "./Info";

b.injectCss(b.asset("./assets/typography.css"));
b.routes(
  b.route({ handler: main }, [
    b.route({ url: "/info", name: "/info", handler: Info })
  ])
);
