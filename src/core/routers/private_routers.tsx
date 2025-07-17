import { MainPanel, MainPanelPath } from "../../features/main_panel/main_panel";
import { IRouter } from "./routers";

export const privateRouters: IRouter[] = [
  {
    element: <MainPanel />,
    path: MainPanelPath,
  },
];
