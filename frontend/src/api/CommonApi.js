import BaseApi from './BaseApi';

class CommonAPi extends BaseApi {
  setup = (params) => this.http('/setup', params, 'POST');

  getDefaultSettings = (params) => this.http('/def-settings', params);

  checkProxy = (params) => this.http('/check-proxy', params, 'POST');

  checkPath = (params) => this.http('/check-path', params, 'POST');
}
export default new CommonAPi();
