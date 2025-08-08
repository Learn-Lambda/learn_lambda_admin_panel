import { NavigateFunction } from "react-router-dom";
import { FormState } from "../../core/store/base_store";
import makeAutoObservable from "mobx-store-inheritance";
import { TrainRepository } from "./train_repository";

class Solution {}

export class TrainStore extends FormState<Solution> {
  constructor() {
    super();
    makeAutoObservable(this);
  }
  trainRepository = new TrainRepository();
  viewModel: Solution = new Solution();
  async init(navigate?: NavigateFunction): Promise<any> {
    super.init(navigate);
    this.trainRepository.getLastTask();
  }
}
