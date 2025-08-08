import {
  HttpMethod,
  HttpRepository,
} from "../../core/repository/http_repository";

export class TrainRepository extends HttpRepository {
  getLastTask = () => this._jsonRequest(HttpMethod.GET, "/get/last/task");
}
