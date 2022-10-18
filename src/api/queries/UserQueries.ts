export const UserQueries = {
  countUsers: `SELECT count(*) FROM users`,
  fetchUsers: `
    SELECT *
    FROM users
    `,
  fetchUserByUid: `
    SELECT *
    FROM users 
    WHERE
    uid = ?
    `,
  pagination: ` LIMIT ? OFFSET ?`,
  filter: (key: string, value: string) => `WHERE ${key} LIKE '%${value}%'`,
};
