//modules
import { Response } from "express";
import {
  JsonController,
  HttpCode,
  Get,
  Res,
  QueryParam,
} from "routing-controllers";
import { Inject, Service } from "typedi";
import { User } from "models/data/User";
import { UserService } from "../services/UserService";
import { UserParams } from "models/params/UserParams";

@Service()
@JsonController("/user")
export class UserController {
  @Inject()
  private userService: UserService = new UserService();

  // TODOS: ErrorHandlers, Validators
  /**
   *  GetUsers
   *
   */
  @HttpCode(200)
  @Get("/")
  public async getUsers(
    @Res() res: Response,
    @QueryParam("page") page = 1,
    @QueryParam("pageSize") pageSize = 10,
    @QueryParam("q")
    search?: UserParams["search"]
  ) {
    try {
      const response = await this.userService.fetchUsers({
        page,
        pageSize,
        search,
      });
      const total = await this.userService.fetchTotalCount({
        page,
        pageSize,
        search,
      });
      const users = response?.map((res: User) => ({
        ...res,
        // TODO: items - should implement separate table with foreign key & constraint in db. 작업 생략
        items: res.items && JSON.parse(res.items),
      }));

      return res.status(200).json({
        success: true,
        error: null,
        result: users,
        total,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: e,
      });
    }
  }
}
