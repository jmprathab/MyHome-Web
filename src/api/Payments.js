import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class PaymentsApi {
  constructor() {
    this.token = store.getState().user.currentUser.token;
  }

  getPayment(id) {
    console.debug(`Get payment api function called with id[${id}], token[${this.token}]`);
    return axiosInstance.get(`/payments/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  getCommunityAdminPayments(communityId, adminId, page, size) {
    console.debug(`Get community admin payments function called with communityId[${communityId}], adminId[${adminId}], page[${page}], size[${size}], token[${this.token}]`);
    return axiosInstance.get(`/communities/${communityId}/admins/${adminId}/payments?=${typeof page !== 'undefined' ? `&page=${page}` : ''}${size ? `&size=${size}` : ''}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  getMemberPayments(memberId) {
    console.debug(`Get member payments api function called with memberId[${memberId}], token[${this.token}]`);
    return axiosInstance.get(`/members/${memberId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}
