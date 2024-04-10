import { FunctionComponent, SVGProps } from "react";
import { RegisteredRouter, RoutePaths } from "@tanstack/react-router";

export type RT = RegisteredRouter["routeTree"];

export interface TanstackLink {
  link: RoutePaths<RT>;
  title: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>;
