import { observable} from "bobx";

export interface thing {
    id : number,
    name : string,
    selected : boolean
}

export class Store {

    @observable
    header : string = "Pozvánka na výpravu";
   
    @observable
    content : string = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam id dolor. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Quisque porta. Integer tempor. Curabitur vitae diam non enim vestibulum interdum. Donec iaculis gravida nulla. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Aenean vel massa quis mauris vehicula lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis risus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Vestibulum fermentum tortor id mi. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Praesent vitae arcu tempor neque lacinia pretium. Aliquam ornare wisi eu metus. Nam sed tellus id magna elementum tincidunt.";
   
    @observable
    footer : string = "Těší se na tebe vedoucí";
   
    @observable
    things : thing[] = [{
        id : 1,
        name : "přezuvky",
        selected : true
    },
    {
        id : 2,
        name : "spacák",
        selected : false
    }];

    @observable
    nameOfNewItem : string = "";

    addThing(thingName : string): void {
        this.things = [...this.things, {
            id : this.things[this.things.length -1 ].id + 1,
            name : thingName,
            selected : true
        }]
    }

    toggleThing(id : number) {
        this.things = this.things.map(thing => {
            if (thing.id === id ) {
                thing.selected = !thing.selected;
                return thing;
            } else {
                return thing;
            }
        })
    }
}

export const store = new Store();