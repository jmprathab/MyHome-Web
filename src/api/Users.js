import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class UsersApi {
  constructor() {
    this.token = store.getState().user.currentUser.token;
  }

  getUser(userId) {
    console.trace(`Get user api function called with userId[${userId}], token[${this.token}]`);
    return axiosInstance.get(`/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  getUsers() {
    console.trace(`Get users api function called with token[${this.token}]`);
    return axiosInstance.get('/users', {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      }
    });
  }
}
