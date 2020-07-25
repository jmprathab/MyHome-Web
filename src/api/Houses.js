import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class HousesApi {
  constructor() {
    this.token = store.getState().user.currentUser.token;
  }

  getHouse(houseId) {
    console.trace(`Get house api function called with houseId[${houseId}], token[${this.token}]`);
    return axiosInstance.get(`/houses/${houseId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
  
  getHouseMembers(houseId) {
    console.trace(`Get house members api function called with houseId[${houseId}], token[${this.token}]`);
    return axiosInstance.get(`/houses/${houseId}/members`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  addHouseMembers(houseId, values) {
    console.trace(`Add house members api function called with houseId[${houseId}], values[${values}], token[${this.token}]`);
    return axiosInstance.post(`/houses/${houseId}/members`, {
      members: values,
    }, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  removeHouseMember(houseId, memberId) {
    console.trace(`Remove house members api function called with houseId[${houseId}], memberId[${memberId}], token[${this.token}]`);
    return fetch(`http://localhost:8080/houses/${houseId}/members/${memberId}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  getHousesOfCommunity(communityId) {
    console.trace(`Get houses of community api function called with communityId[${communityId}], token[${this.token}]`);
    return axiosInstance.get(`/communities/${communityId}/houses`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}
