import axiosInstance from '../axios/axios';

export default class GetCommunitiesApi {
  constructor(token) {
    this.token = token;
  }
  getCommunities() {
    console.debug(
      `Get communities api called with token[${this.token}]`
    );
    return axiosInstance.get("http://localhost:8080/communities", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
