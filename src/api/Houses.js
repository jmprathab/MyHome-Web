import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class HousesApi {
  constructor() {
    this.token = store.getState().user.currentUser.token;
  }

  getHouse(houseId) {
    console.debug(`Get house api function called with houseId[${houseId}], token[${this.token}]`);
    return axiosInstance.get(`/houses/${houseId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  addHouses(communityId, values) {
    console.debug(`Create house api function called with communityId[${communityId}], values[${values}], token[${this.token}]`);
    return axiosInstance.post(`/communities/${communityId}/houses`, {
      houses: values,
    }, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  removeHouse(communityId, houseId) {
    console.debug(`Remove house api function called with communityId[${communityId}], houseId[${houseId}], token[${this.token}]`);
    return axiosInstance.delete(`/communities/${communityId}/houses/${houseId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
  
  getHouseMembers(houseId) {
    console.debug(`Get house members api function called with houseId[${houseId}], token[${this.token}]`);
    return axiosInstance.get(`/houses/${houseId}/members`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  addHouseMembers(houseId, values) {
    console.debug(`Add house members api function called with houseId[${houseId}], values[${values}], token[${this.token}]`);
    return axiosInstance.post(`/houses/${houseId}/members`, {
      members: values,
    }, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  removeHouseMember(houseId, memberId) {
    console.debug(`Remove house members api function called with houseId[${houseId}], memberId[${memberId}], token[${this.token}]`);
    return axiosInstance.delete(`/houses/${houseId}/members/${memberId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
    //return fetch(`http://localhost:8080/houses/${houseId}/members/${memberId}`, {
    //  method: "DELETE",
    //  headers: {
    //    'Content-type': 'application/json; charset=UTF-8',
    //    
    //    'Authorization': `Bearer ${this.token}`,
    //  },
    //});
  }

  getHousesOfCommunity(communityId) {
    console.debug(`Get houses of community api function called with communityId[${communityId}], token[${this.token}]`);
    return axiosInstance.get(`/communities/${communityId}/houses`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}
