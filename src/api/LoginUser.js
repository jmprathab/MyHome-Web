import axiosInstance from "../axios/axios";

export default class LoginUserApi {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  loginUser() {
    console.debug(
      `Login user api called with email[${this.email}], password[${this.password}]`
    );
    return axiosInstance.post(`/users/login`, {
      email: this.email,
      password: this.password,
    });
  }
}
