import axiosInstance from '../axios/axios';

export default class GetCommunityApi {
  constructor(communityId, token) {
    this.communityId = communityId;
    this.token = token;
  }
  getCommunity() {
    console.debug(
      `Get details of a community api called with communityId[${this.communityId}], token[${this.token}]`
    );
    return axiosInstance.get(`/communities/${this.communityId}`, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
