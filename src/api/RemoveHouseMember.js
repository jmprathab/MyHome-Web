export default class RemoveHouseMemberApi {
  constructor(houseId, memberId, token) {
    this.houseId = houseId;
    this.memberId = memberId;
    this.token = token;
  }
  removeMember() {
    console.debug(
      `Remove house members api called with memberId[${this.memberId}], houseId[${this.houseId}], token[${this.token}]`
    );
    return fetch(`http://localhost:8080/houses/${this.houseId}/members/${this.memberId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",

        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
