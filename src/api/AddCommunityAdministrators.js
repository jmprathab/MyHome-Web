export default class AddCommunityAdministratorsApi {
  constructor(values, communityId, token) {
    this.values = values;
    this.communityId = communityId;
    this.token = token;
  }
  addAdministrators() {
    console.debug(
      `Add community administrators api called with values[${this.values}], communityId[${this.communityId}], token[${this.token}]`
    );
    return fetch(`http://localhost:8080/communities/${this.communityId}/admins`, {
      method: "POST",
      body: JSON.stringify({
        admins: this.values,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
