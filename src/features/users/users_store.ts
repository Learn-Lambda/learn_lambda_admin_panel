import makeAutoObservable from "mobx-store-inheritance";
import { CrudFormStore } from "../../core/store/base_store";
import { UserModel } from "./user_model";
import { UserHttpRepository } from "./user_repository";

export class UserStore extends CrudFormStore<UserModel, UserHttpRepository> {
  repository: UserHttpRepository = new UserHttpRepository();
  viewModel: UserModel = new UserModel();
  constructor() {
    super();
    makeAutoObservable(this);
  }
}
