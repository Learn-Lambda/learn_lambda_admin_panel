import { Tasks, TasksPath } from "../../features/tasks/tasks";
import { TrainPath, Train } from "../../features/train/train";
import type { IRouter } from "./routers";

export const privateRouters: IRouter[] = [
  {
    path: TasksPath,
    element: <Tasks />,
  },
  {
    path: TrainPath,
    element: <Train />,
  },
];
