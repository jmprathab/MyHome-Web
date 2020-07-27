import axiosInstance from "../axios/axios";

export default class AccountsApi {
  createUser(name, email, password) {
    console.debug(
      `Create user api called with name[${name}], email[${email}], password[${password}]`
    );
    return axiosInstance.post('/users', {
      name: name,
      email: email,
      password: password,
    });
  }
  
  loginUser(email, password) {
    console.debug(
      `Login user api called with email[${email}], password[${password}]`
    );
    return axiosInstance.post(`/users/login`, {
      email: email,
      password: password,
    });
  }
}