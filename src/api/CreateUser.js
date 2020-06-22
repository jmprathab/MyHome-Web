export default class CreateUserApi {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  createUser() {
    console.debug(
      `Create user api called with name[${this.name}], email[${this.email}], password[${this.password}]`
    );
    return fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
}
