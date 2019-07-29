import { CategoriesApiService } from './categories';
import { MerchantsApiService } from './merchants';
import { UsersApiService } from './users';

class ApiService {
    constructor() {
        this.categories = new CategoriesApiService();
        this.merchants = new MerchantsApiService();
        this.users = new UsersApiService();
    }
}

export const Api = new ApiService();