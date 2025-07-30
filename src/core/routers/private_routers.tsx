import { Tasks, TasksPath } from "../../features/tasks/tasks";
import type { IRouter } from "./routers";

export const privateRouters: IRouter[] = [
  {
    path: TasksPath,
    element: <Tasks />,
  },
];
