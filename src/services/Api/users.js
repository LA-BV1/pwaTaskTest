import BaseApiService from './base';

export class UsersApiService extends BaseApiService {

    getUsers() {
        return this.request({
            method: 'get',
            url: '/users'
        })
    }

}