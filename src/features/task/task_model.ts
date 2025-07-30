import { IsInt, IsString, Max, Min } from "class-validator";
import { ValidationModel } from "../../core/model/validation_model";

export class TaskModel extends ValidationModel {
  @IsString()
  description: string;
  @IsString()
  name: string;
  @IsString()
  code: string;
  @IsString()
  test: string;
  @IsInt()
  @Min(1)
  @Max(3)
  complexity: number;
}
