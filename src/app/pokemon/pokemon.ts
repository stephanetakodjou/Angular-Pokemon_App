


export class Pokemon {

  constructor( 
    name: string = 'Entrer un nom...',
    hp : number = 100,
    cp : number = 10, 
    types : string []= ['normal'],
    created:Date =new Date(),
    picture : string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png"
    ){
    this.name= name;
    this.hp = hp ;
    this.cp = cp ;
    this.types = types;
    this.created = created ;
    this.picture = picture;

  }


    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;
  }