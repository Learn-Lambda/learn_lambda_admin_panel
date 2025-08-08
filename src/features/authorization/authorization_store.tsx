import makeAutoObservable from "mobx-store-inheritance";
import { AuthorizationModel } from "./authorization_model";
import { message } from "antd";
import {
  AuthorizationHttpRepository,
  AuthorizationLocalStorageRepository,
} from "./authorization_repository";
import { FormState } from "../../core/store/base_store";
<<<<<<< HEAD
import { TasksPath } from "../tasks/tasks";
import { NavigateFunction } from "react-router-dom";
import { authService } from "../..";
=======
import { RecognitionCategoryPath } from "../recognition_category/recognition_category";
import { HomePath } from "../home/home";
>>>>>>> 7595301ad1a6a6b52f5f60e85e6cc9ab5feae627

export class AuthorizationStore extends FormState<AuthorizationModel> {
  viewModel: AuthorizationModel = AuthorizationModel.empty();
  authorizationLocalStorageRepository: AuthorizationLocalStorageRepository =
    new AuthorizationLocalStorageRepository();
  authorizationHttpRepository = new AuthorizationHttpRepository();
  constructor() {
    super();
    makeAutoObservable(this);
  }
  async init(navigate?: NavigateFunction): Promise<any> {
    super.init(navigate);
    this.authorizationLocalStorageRepository.isAuth().map((isAuth) => {
      if (isAuth) {
        this.navigate?.(TasksPath);
        authService.emit({ isAuthorization: true });
      }
    });
  }
  async onTapLogin() {
    (await this.viewModel.valid())?.fold(
      async () => {
        (await this.authorizationHttpRepository.login(this.viewModel)).fold(
          async (token) => {
            this.authorizationLocalStorageRepository.setAuthStatus(true);
            this.authorizationLocalStorageRepository.setJwtToken(token.token);
<<<<<<< HEAD
            await (
              await this.authorizationHttpRepository.getUserProfileFromJwt()
            ).map((user) => {
              this.authorizationLocalStorageRepository.setUser(user);
              this.navigate?.(TasksPath);
              authService.emit({ isAuthorization: true });
            });
=======
            if (this.navigate) this.navigate(HomePath);
>>>>>>> 7595301ad1a6a6b52f5f60e85e6cc9ab5feae627
          },
          async (e) => {
            message.error(e.message);
          }
        );
      },
      async (e) => message.error(e)
    );
  }
}
