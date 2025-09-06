import {
  CrudHttpRepository,
  HttpMethod,
} from "../../core/repository/http_repository";
import { TaskModel } from "../task/task_model";
import { RunTaskModel, TaskSolutionModel } from "./task_solutions_model";

export class TaskSolutionRepository extends CrudHttpRepository<TaskSolutionModel> {
  featurePath: string = "/solution";

  solutionAtTask = (id: number) =>
    this._jsonRequest<TaskSolutionModel[]>(
      HttpMethod.POST,
      "/solution/at/task",
      { id: id }
    );

  getTask = (id: number) =>
    this._jsonRequest<TaskModel>(HttpMethod.POST, "/get/task/by/id", {
      id: id,
    });

  sendNewSolution = (model: RunTaskModel) =>
    this._jsonRequest<TaskModel>(HttpMethod.POST, "/run/task", model);
}
