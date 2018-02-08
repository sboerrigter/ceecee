import axios from 'axios';

export default class Facebook
{
  get(endpoint, params = {}) {
    return axios.request({
      method: 'get',
      baseURL: 'https://graph.facebook.com/v2.12/',
      url: endpoint,
      params: Object.assign({'access_token': process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN}, params),
    }).then(response => {
      return response.data.data;
    });
  }

  getEvents() {
    return this.get('theceespot/events', {
      time_filter: 'upcoming',
    });
  }
}
