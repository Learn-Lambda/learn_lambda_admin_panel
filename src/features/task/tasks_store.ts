import makeAutoObservable from "mobx-store-inheritance";
import { CrudFormStore } from "../../core/store/base_store";
import { TaskModel } from "./task_model";
import { TaskHttpRepository } from "./tasks_http_repository";

export class TasksStore extends CrudFormStore<TaskModel, TaskHttpRepository> {
  repository: TaskHttpRepository = new TaskHttpRepository();
  viewModel: TaskModel = new TaskModel();
  constructor() {
    super();
    makeAutoObservable(this);
  }
}
