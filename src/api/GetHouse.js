import axiosInstance from '../axios/axios';

export default class GetHouseApi {
  constructor(houseId, token) {
    this.houseId = houseId;
    this.token = token;
  }
  getHouse() {
    console.debug(
      `Get details of a house api called with houseId[${this.houseId}], token[${this.token}]`
    );
    return axiosInstance.get(`/houses/${this.houseId}`, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
