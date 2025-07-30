import makeAutoObservable from "mobx-store-inheritance";

export class TasksStore {
  constructor() {
    makeAutoObservable(this);
  }
}
