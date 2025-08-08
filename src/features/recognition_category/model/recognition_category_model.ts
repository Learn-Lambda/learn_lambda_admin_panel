import { IsString } from "class-validator";
import { ValidationModel } from "../../../core/model/validation_model";

export class NewRecognitionCategoryModel extends ValidationModel {
  createDate?: string;
  @IsString()
  name: string;
  @IsString()
  helper: string;
}
