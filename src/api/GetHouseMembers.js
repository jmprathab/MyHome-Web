import axiosInstance from '../axios/axios';

export default class GetHouseMembersApi {
  constructor(houseId, token) {
    this.houseId = houseId;
    this.token = token;
  }
  getMembers() {
    console.debug(
      `Get members of a house api called with houseId[${this.houseId}], token[${this.token}]`
    );
    return axiosInstance.get(`/houses/${this.houseId}/members`, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
