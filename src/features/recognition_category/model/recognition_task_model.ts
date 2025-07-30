import { IsNumber } from "class-validator";

export interface RecognitionTaskModel {
  id?: number;
  createDate: string;
  categoryId: number;
}

export class NewRecognitionTaskModel {
  createData: string = new Date().toDateString();
  @IsNumber()
  categoryId: number;
}
