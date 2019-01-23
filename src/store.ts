import { observable} from "bobx";
import * as html2canvas from 'html2canvas';



export interface thing {
    id : number,
    name : string,
    selected : boolean
}

export class Store {

    @observable
    header : string = "Pozvánka na vánoční výpravu";
   
    @observable
    content : string = `Ahoj! Vánoce už jsou za dveřmi a my bychom Vás chtěli pozvat navánoční výpravu, která se bude konat **16. 12. - 18. 12.** v klubovně. Sejdeme se **! Na nádraží !** v pátek 16. 12. v 18:15 (v 18:40 odjíždí vlak). Je třeba dopravit děti až na nádraží. Vrátíme se v neděli kolem **13:48**`;
   
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
    },
    {
        id : 3,
        name : "ešus",
        selected : false
    },
    {
        id : 4,
        name : "karimatku",
        selected : false
    },
    {
        id : 5,
        name : "věci na schůzku",
        selected : false
    },
    {
        id : 6,
        name : "zápisník a tužku",
        selected : false
    },
    {
        id : 7,
        name : "kroj",
        selected : false
    },
    {
        id : 8,
        name : "hygienu",
        selected : false
    },
    {
        id : 9,
        name : "baterku",
        selected : false
    },
    {
        id : 10,
        name : "večeři",
        selected : false
    },
    {
        id : 11,
        name : "šátek",
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