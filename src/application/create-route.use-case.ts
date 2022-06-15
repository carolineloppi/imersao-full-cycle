import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return route.toJson();
  }
}

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
};

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
};
