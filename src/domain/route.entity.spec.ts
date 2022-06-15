import { LatLng, Route, RouteProps } from "./route.entity";

describe("Route Tests", () => {
  test("constructor", () => {
    let routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    let route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    expect(route.id).toBeDefined();
    routeProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }],
    };
    route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 11 }],
    });
  });

  test("updateTitle method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    route.updateTitle("title updated");
    expect(route.title).toBe("title updated");
  });

  test("updatePosition method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    const newStartPosition: LatLng = { lat: 10, lng: 20 };
    const newEndPosition: LatLng = { lat: 30, lng: 40 };

    route.updatePosition(newStartPosition, newEndPosition);
    expect(route.startPosition).toBe(newStartPosition);
    expect(route.endPosition).toBe(newEndPosition);
  });

  test("updatePoints method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = new Route(routeProps);
    const newPoints: LatLng[] = [
      { lat: 10, lng: 20 },
      { lat: 30, lng: 40 },
    ];

    expect(route.points.length).toBe(0);
    route.updatePoints(newPoints);
    expect(route.points).toStrictEqual(newPoints);
  });
});
