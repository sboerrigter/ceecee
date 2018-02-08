import axios from 'axios';

export default class Facebook
{
  /**
   * Get something from the Facebook Graph API
   *
   * @param {string} endpoint
   * @return {array.<Object>} Response data
   */
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

  /**
   * Get events
   *
   * @param {string} type Can be 'upcoming' or 'past'
   * @return {array.<number>} List of events
   */
  getEvents(type) {
    return this.get('theceespot/events', {
      time_filter: type,
    });
  }

  /**
   * Get events
   *
   * @param {number} id Event ID
   * @return {Object} Event details
   */
   getEvent(id) {
     return this.get('event/' + id);
   }
}
