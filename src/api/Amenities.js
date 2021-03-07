import axiosInstance from "../axios/axios";
import store from "../redux/store";

export default class AmenitiesApi {
  constructor() {
    this.token = store.getState().user.currentUser.token;
  }

  getAmenitiesForCommunityId(communityId) {
    console.debug(`Get amenities for community id function called with communityId[${communityId}] and token[${this.token}]`);
    return axiosInstance.get(`/communities/${communityId}/amenities`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }

  getAmenity(amenityId) {
    console.debug(`Get amenity function called with amenityId[${amenityId}] and token[${this.token}]`);
    return axiosInstance.get(`/amenities/${amenityId}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
    });
  }
}
