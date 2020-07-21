import axiosInstance from "../axios/axios";

export default class AddHouseMembersApi {
  constructor(values, houseId, token) {
    this.values = values;
    this.houseId = houseId;
    this.token = token;
  }
  addMembers() {
    console.debug(
      `Add house members api called with values[${this.values}], houseId[${this.houseId}], token[${this.token}]`
    );
    return fetch(`http://localhost:8080/houses/${this.houseId}/members`, {
      method: "POST",
      body: JSON.stringify({
        members: this.values,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
