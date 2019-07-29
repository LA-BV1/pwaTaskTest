import BaseApiService from './base';

export class CategoriesApiService extends BaseApiService {
    
    getCategories() {
        return this.request({
            method: 'get',
            url: '/categories'
        })
    }

}