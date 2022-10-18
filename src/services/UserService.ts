import { Service } from "typedi";
import { execute } from "../api/utils/mysql.connector.sql";
import { UserQueries } from "../api/queries/UserQueries";
import { User } from "../models/data/User";
import { UserParams } from "models/params/UserParams";

type CountResponse = [
  {
    "count(*)": number;
  }
];

@Service()
export class UserService {
  public fetchTotalCount = async ({ search }: UserParams) => {
    let query = ``;
    if (search) {
      const objKey = Object.keys(search).find(
        ([k, v]) => !!v
      ) as keyof typeof search;
      if (objKey) {
        query = query.concat(UserQueries.filter(objKey, search[objKey]));
      }
    }
    const count = await execute<CountResponse>(
      `${UserQueries.countUsers} ${query}`,
      []
    );
    return count[0]["count(*)"] as number;
  };

  /**
   * get users
   */
  public fetchUsers = async ({ page, pageSize, search }: UserParams) => {
    let query = ``;

    if (search) {
      const objKey = Object.keys(search).find(
        ([k, v]) => !!v
      ) as keyof typeof search;
      if (objKey) {
        query = query.concat(UserQueries.filter(objKey, search[objKey]));
      }
    }
    query = query.concat(UserQueries.pagination);
    const offset = (page - 1) * pageSize;
    const users = await execute<User[]>(`${UserQueries.fetchUsers} ${query}`, [
      pageSize,
      offset,
    ]);
    return users as User[];
  };
  /**
   * get user by uid
   */
  public fetchUserByUid = async (id: User["uid"]) => {
    return execute<User>(UserQueries.fetchUserByUid, ["*", id]);
  };
}
