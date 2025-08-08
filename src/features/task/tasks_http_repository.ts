import { CrudHttpRepository } from "../../core/repository/http_repository";
import { TaskModel } from "./task_model";

export class TaskHttpRepository extends CrudHttpRepository<TaskModel> {
  featurePath: string = "/tasks";
}
