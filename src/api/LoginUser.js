export default class LoginUserApi {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  createUser() {
    console.debug(
      `Login user api called with email[${this.email}], password[${this.password}]`
    );
    return fetch("http://localhost:8080/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.email,
        password: this.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
}
