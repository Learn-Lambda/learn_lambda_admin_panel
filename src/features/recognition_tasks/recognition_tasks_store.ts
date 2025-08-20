import { NavigateFunction } from "react-router-dom";
import { CrudFormStore } from "../../core/store/base_store";
import { RecognitionTasksHttpRepository } from "./recognition_tasks_http_repository";
import { RecognitionTaskModel } from "./recognition_tasks_model";
import makeAutoObservable from "mobx-store-inheritance";

export class RecognitionTaskStore extends CrudFormStore<
  RecognitionTaskModel,
  RecognitionTasksHttpRepository
> {
  repository: RecognitionTasksHttpRepository =
    new RecognitionTasksHttpRepository();
  viewModel: RecognitionTaskModel = new RecognitionTaskModel();
  constructor() {
    super();
    makeAutoObservable(this);
  }
  async init(navigate?: NavigateFunction) {
    super.init(navigate);
  }
}
