<<<<<<< HEAD
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
=======
import { Home, HomePath } from "../../features/home/home";
import {
  RecognitionCategory,
  RecognitionCategoryPath,
} from "../../features/recognition_category/recognition_category";
import {
  RecognitionTask,
  RecognitionTaskPath,
} from "../../features/recognition_tasks/recognition_tasks";
import { Tasks, TasksPath } from "../../features/task/tasks";
import { Users, UsersPath } from "../../features/users/users";
import { IRouter } from "./routers";

export const privateRouters: IRouter[] = [
  {
    element: <RecognitionCategory />,
    path: RecognitionCategoryPath,
>>>>>>> 7595301ad1a6a6b52f5f60e85e6cc9ab5feae627
  },
  {
    element: <RecognitionTask />,
    path: RecognitionTaskPath,
  },
  {
    element: <Tasks />,
    path: TasksPath,
  },
  { element: <Home />, path: HomePath },
  { element: <Users />, path: UsersPath },
];
