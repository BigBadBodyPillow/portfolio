/// <reference types="vite/client" />

// custom declarations for importing SVGs with svgr plugin

declare module "*.svg" {
  import type { ComponentType, SVGProps } from "react";
  const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.svg?react" {
  import type { ComponentType, SVGProps } from "react";
  const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
