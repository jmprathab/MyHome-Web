import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class DocumentsApi {
  constructor() {
    this.token = store.getState().user.currentUser.token;
  }

  getDocuments(memberId) {
    console.debug(`Get documents api function called with memberId[${memberId}], token[${this.token}]`);
    return axiosInstance.get(`/members/${memberId}/documents`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  removeDocuments(memberId) {
    console.debug(`Remove documents api function called with memberId[${memberId}], token[${this.token}]`);
    return axiosInstance.delete(`/members/${memberId}/documents`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}