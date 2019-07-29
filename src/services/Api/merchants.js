import BaseApiService from './base';

export class MerchantsApiService extends BaseApiService {

    getMerchants() {
        return this.request({
            method: 'get',
            url: '/mercants'
        })
    }

}