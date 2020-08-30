import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class PaymentsApi {
  constructor() {
    this.token = store.getState().user.currentUser.token;
  }

  getPayment(paymentId) {
    console.debug(`Get payment api function called with paymentId[${paymentId}], token[${this.token}]`);
    return axiosInstance.get(`/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}