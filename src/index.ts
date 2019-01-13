import * as b from "bobril";
import main from './main';

b.injectCss(b.asset('./assets/typography.css'));
b.routes(b.route({ handler: main }));
