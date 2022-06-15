import crypto from "crypto";

export type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;
  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = { ...props, points: props.points || [] };
  }

  // Métodos que deixam claras suas ações.
  // Regras de negócio.
  updateTitle(newTitle: string) {
    this.title = newTitle;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updatePoints(points: LatLng[]) {
    this.points = points;
  }

  //Por não alterarem o objeto, os getters podem ser públicos.
  get title() {
    return this.props.title;
  }
  get startPosition() {
    return this.props.startPosition;
  }
  get endPosition() {
    return this.props.endPosition;
  }
  get points() {
    return this.props.points;
  }

  //setters devem ser privados. Criando-se métodos específicos que englobam regras do negócio para atualização das propriedades.
  private set title(value: string) {
    this.props.title = value;
  }
  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }
  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }
  private set points(value: LatLng[]) {
    this.props.points = value;
  }

  //métodos utilitários
  toJson() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}

/* 
Atualizar propriedades diretamente pelo set, não é uma boa prática. 
Caso seja preciso incluir regras do negócio, é melhor ter um método update que por sua vez chamará o set dentre outras possíveis ações.

:( -> route.title = 'não atualizar dessa forma';
:) -> route.updateTitle("Ok atualizar dessa forma!");

*/
