import {
  CrudHttpRepository,
  HttpMethod,
} from "../../core/repository/http_repository";
import { TaskModel } from "./task_model";

export class TaskHttpRepository extends CrudHttpRepository<TaskModel> {
  featurePath: string = "/tasks";
  createTaskModel = (code: { code: string }) =>
    this._jsonRequest<{
      code: string;
      functionName: string;
      testArguments: { result: any; arguments: any[] }[];
    }>(HttpMethod.POST, `/fill/task/args`, code);
}
