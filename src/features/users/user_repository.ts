import { CrudHttpRepository } from "../../core/repository/http_repository";
import { UserModel } from "./user_model";

export class UserHttpRepository extends CrudHttpRepository<UserModel> {
  featurePath: string = "/users";
}
