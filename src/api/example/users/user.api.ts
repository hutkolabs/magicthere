export class UserApi {
  async getUsers() {
    const response = await fetch(`/api/users`);
    const data = await response.json();

    return data.users;
  }
}
