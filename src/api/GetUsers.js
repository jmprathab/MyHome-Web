import axiosInstance from '../axios/axios';

export default class GetUsersApi {
  constructor(token) {
    this.token = token;
  }
  getUsers() {
    console.debug(
      `Get users api called with token[${this.token}]`
    );
    return axiosInstance.get(`/users`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",

        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
