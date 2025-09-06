import { IsNumber, IsString } from "class-validator";
import { ValidationModel } from "../../core/model/validation_model";

export class TaskSolutionModel extends ValidationModel {
  authorId?: number;
  @IsNumber()
  taskId: number;
  hash: string;
  @IsString()
  code: string;
  createDate: Date;
}
export class RunTaskModel extends ValidationModel {
  @IsNumber()
  taskNumber: number;
  @IsString()
  code: string = "";
}
