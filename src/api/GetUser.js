import axiosInstance from '../axios/axios';

export default class GetUserApi {
  constructor(userId, token) {
    this.userId = userId;
    this.token = token;
  }
  getUser() {
    console.debug(
      `Get user api called with userId[${this.userId}], token[${this.token}]`
    );
    return axiosInstance.get(`/users/${this.userId}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",

        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
