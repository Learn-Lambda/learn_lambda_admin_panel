import { CrudHttpRepository } from "../../core/repository/http_repository";
import { NewRecognitionCategoryModel } from "./model/recognition_category_model";

export class RecognitionCategoryHttpRepository extends CrudHttpRepository<NewRecognitionCategoryModel> {
    featurePath: string = '/recognition/category';
}
