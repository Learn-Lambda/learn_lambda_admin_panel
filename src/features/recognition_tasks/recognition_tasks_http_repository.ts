import { CrudHttpRepository } from "../../core/repository/http_repository";
import { RecognitionTaskModel } from "./recognition_tasks_model";

export class RecognitionTasksHttpRepository extends CrudHttpRepository<RecognitionTaskModel> {
  featurePath: string = "/recognition/tasks/";
}
