import axios from 'axios';

class BaseApiService {
    constructor() {
        this.baseURL = 'https://my-json-server.typicode.com/lazicmladen/PWATrainingFakeServer';
        this.server = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    request({ method, url, params }) {
        return this.server
            .request({
                method,
                url,
                params
            })
            .then(response => response.data)
            .catch(this.handleError);
    }

    handleError(error) {
        console.log(error);
    }
}

export default BaseApiService;
