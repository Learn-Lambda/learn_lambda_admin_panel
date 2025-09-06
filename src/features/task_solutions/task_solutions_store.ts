import { NavigateFunction } from "react-router-dom";
import { CrudFormStore } from "../../core/store/base_store";
import { TaskSolutionRepository } from "./task_solution_repository";
import { RunTaskModel, TaskSolutionModel } from "./task_solutions_model";
import { TaskModel } from "../task/task_model";
import makeAutoObservable from "mobx-store-inheritance";

export class TaskSolutionStore extends CrudFormStore<
  TaskSolutionModel,
  TaskSolutionRepository
> {
  deleteSolutions(id: number) {
    this.delete(id as number);
    this.reload();
  }
  sendNewSolution = async () => {
    this.newSolution.taskNumber = this.task?.id as number;
    (await this.newSolution.validMessage<RunTaskModel>()).map(async (el) => {
      await this.repository.sendNewSolution(el);
    });
  };
  repository: TaskSolutionRepository = new TaskSolutionRepository();
  viewModel: TaskSolutionModel = new TaskSolutionModel();
  task?: TaskModel;
  viewModels?: TaskSolutionModel[];
  newSolution: RunTaskModel = new RunTaskModel();
  id: string;
  constructor() {
    super();
    makeAutoObservable(this);
  }
  async init(navigate?: NavigateFunction): Promise<any> {
    this.navigate = navigate;
  }
  reload = () => {
    this.initParam(this.id);
  };
  initParam = async (id: string) => {
    this.id = id;
    await this.mapOk("viewModels", this.repository.solutionAtTask(Number(id)));
    await this.mapOk("task", this.repository.getTask(Number(id)));
  };
}
