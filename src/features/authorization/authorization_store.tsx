import makeAutoObservable from "mobx-store-inheritance";
import { AuthorizationModel } from "./authorization_model";
import { message } from "antd";
import {
  AuthorizationHttpRepository,
  AuthorizationLocalStorageRepository,
} from "./authorization_repository";
import { FormState } from "../../core/store/base_store";
import { RecognitionCategoryPath } from "../recognition_category/recognition_category";
import { HomePath } from "../home/home";

export class AuthorizationStore extends FormState<AuthorizationModel> {
  viewModel: AuthorizationModel = AuthorizationModel.empty();
  authorizationLocalStorageRepository: AuthorizationLocalStorageRepository =
    new AuthorizationLocalStorageRepository();
  authorizationHttpRepository = new AuthorizationHttpRepository();
  constructor() {
    super();
    makeAutoObservable(this);
  }
  async onTapLogin() {
    (await this.viewModel.valid())?.fold(
      async () => {
        (await this.authorizationHttpRepository.login(this.viewModel)).fold(
          (token) => {
            this.authorizationLocalStorageRepository.setAuthStatus(true);
            this.authorizationLocalStorageRepository.setJwtToken(token.token);
            if (this.navigate) this.navigate(HomePath);
          },
          (e) => {
            message.error(e.message);
          }
        );
      },
      async (e) => message.error(e)
    );
  }
}
