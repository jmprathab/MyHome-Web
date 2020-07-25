import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class CommunitiesApi {
  constructor() {
    this.token = store.getState().user.currentUser ? store.getState().user.currentUser.token : '';
  }

  getCommunity(communityId) {
    console.debug(`Get community api function called with communityId[${communityId}], token[${this.token}]`);
    return axiosInstance.get(`/communities/${communityId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  createCommunity(name, district) {
    console.debug(`Create community api function called with name[${name}], district[${district}], token[${this.token}]`);
    return axiosInstance.post(`/communities`, {
      name: name,
      district: district,
    }, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  deleteCommunity(communityId) {
    console.debug(`Delete community api function called with communityId[${communityId}], token[${this.token}]`);
    return axiosInstance.delete(`/communities/${communityId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  getCommunities() {
    console.debug(`Get communities api function called with token[${this.token}]`);
    return axiosInstance.get(`/communities`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}
