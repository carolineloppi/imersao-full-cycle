import { Route } from "./route.entity";

//agnóstica ao framework. Então faz parte do domínio do negócio.
export interface RouteRepositoryInterface {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
}
