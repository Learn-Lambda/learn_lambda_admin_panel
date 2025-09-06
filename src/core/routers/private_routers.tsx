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
import {
  TaskSolutionPath,
  TaskSolutionScreen,
} from "../../features/task_solutions/task_solutions";
import { Users, UsersPath } from "../../features/users/users";
import { IRouter } from "./routers";

export const privateRouters: IRouter[] = [
  {
    element: <RecognitionCategory />,
    path: RecognitionCategoryPath,
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
  { element: <TaskSolutionScreen />, path: TaskSolutionPath + ":id" },
];
