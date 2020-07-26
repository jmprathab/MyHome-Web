import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class CommunityAdminsApi {
  constructor(communityId) {
    this.communityId = communityId;
    this.token = store.getState().user.currentUser.token;
  }

  getAdmins() {
    console.debug(`Get admins api function called with communityId[${this.communityId}], token[${this.token}]`);
    return axiosInstance.get(`/communities/${this.communityId}/admins`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  addAdmins(values) {
    console.debug(`Add admins api function called with values[${values}], communityId[${this.communityId}], token[${this.token}]`);
    return axiosInstance.post(`/communities/${this.communityId}/admins`, {
      admins: values,
    }, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  removeAdmin(adminId) {
    console.debug(`Remove admins api function called with adminId[${adminId}], communityId[${this.communityId}], token[${this.token}]`);
    return axiosInstance.delete(`/communities/${this.communityId}/admins/${adminId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}
