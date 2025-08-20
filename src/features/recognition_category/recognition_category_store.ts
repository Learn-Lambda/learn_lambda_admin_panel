import makeAutoObservable from "mobx-store-inheritance";
import { CrudFormStore } from "../../core/store/base_store";
import { NewRecognitionCategoryModel } from "./model/recognition_category_model";
import { RecognitionCategoryHttpRepository } from "./recognition_category_http_repository";

export class RecognitionTaskCategoryStore extends CrudFormStore<
  NewRecognitionCategoryModel,
  RecognitionCategoryHttpRepository
> {
  repository: RecognitionCategoryHttpRepository =
    new RecognitionCategoryHttpRepository();
  viewModel: NewRecognitionCategoryModel = new NewRecognitionCategoryModel();
  constructor() {
    super();
    makeAutoObservable(this);
  }
}
