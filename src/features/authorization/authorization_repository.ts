import { HttpMethod, HttpRepository } from "../../core/repository/http_repository";
import { LocalStorageRepository } from "../../core/repository/local_storage_repository";
import { AuthorizationModel } from "./authorization_model";

export class AuthorizationLocalStorageRepository extends LocalStorageRepository {
  setJwtToken = (token: string) => this._setItem("jwt", token);
  setAuthStatus = (bool: boolean) => this._setItem("auth", String(bool));
  getJwtToken = () => this._getItem<string>('jwt');
  isAuth = () => this._getItem("auth").map((s: any) => Boolean(s));
}
export class AuthorizationHttpRepository extends HttpRepository {
  login = (authorizationModel: AuthorizationModel) => this._jsonRequest<{ token: string }>(HttpMethod.POST, '/admin/login', authorizationModel);
}
