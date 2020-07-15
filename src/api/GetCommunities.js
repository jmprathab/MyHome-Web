import axiosInstance from '../axios/axios';

export default class GetCommunitiesApi {
  constructor(token) {
    this.token = token;
  }
  getCommunities() {
    console.debug(
      `Get communities api called with token[${this.token}]`
    );
    return axiosInstance.get("/communities", {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
