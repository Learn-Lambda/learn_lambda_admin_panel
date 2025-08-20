/* eslint-disable array-callback-return */
import makeAutoObservable from "mobx-store-inheritance";
import { CrudFormStore } from "../../core/store/base_store";
import { TaskModel } from "./task_model";
import { TaskHttpRepository } from "./tasks_http_repository";
import { message } from "antd";

export class TasksStore extends CrudFormStore<TaskModel, TaskHttpRepository> {
  repository: TaskHttpRepository = new TaskHttpRepository();
  viewModel: TaskModel = new TaskModel();
  constructor() {
    super();
    makeAutoObservable(this);
  }

  createTaskModel = async () => {
    if (this.viewModel.code === undefined) {
      message.error("поле code не введено");
    }
    (await this.repository.createTaskModel({ code: this.viewModel.code })).map(
      (el) => {
        this.viewModel.functionName = el.functionName;
        this.viewModel.code = el.code;
        this.viewModel.testArguments = el.testArguments;
        message.success("модель заполнена")
      }
    );
  };
}
