import { IsString } from "class-validator";
import { ValidationModel } from "../../core/model/validation_model";

export class UserModel extends ValidationModel {
  @IsString()
  email: string;
  @IsString()
  login: string;
  @IsString()
  password: string;
}
