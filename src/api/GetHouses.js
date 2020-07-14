import axiosInstance from '../axios/axios';

export default class GetHousesApi {
  constructor(communityId, token) {
    this.communityId = communityId;
    this.token = token;
  }
  getHouses() {
    console.debug(
      `Get houses of a community api called with communityId[${this.communityId}], token[${this.token}]`
    );
    return axiosInstance.get(`/communities/${this.communityId}/houses`, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
