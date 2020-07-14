import axiosInstance from '../axios/axios';

export default class GetAdminsApi {
  constructor(communityId, token) {
    this.communityId = communityId;
    this.token = token;
  }
  getAdmins() {
    console.debug(
      `Get admins api called with communityId[${this.communityId}], token[${this.token}]`
    );
    return axiosInstance.get(`/communities/${this.communityId}/admins`, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
