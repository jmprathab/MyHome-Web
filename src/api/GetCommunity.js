import axiosInstance from '../axios/axios';

export default class GetHousesApi {
  constructor(communityId, token) {
    this.communityId = communityId;
    this.token = token;
  }
  getCommunity() {
    console.debug(
      `Get details of a community api called with communityId[${this.communityId}], token[${this.token}]`
    );
    return axiosInstance.get(`http://localhost:8080/communities/${this.communityId}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
