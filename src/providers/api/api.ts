import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthProvider} from "../auth/auth";
import {Config} from "../../app/config/config";

/*
 Generated class for the ApiProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ApiProvider {

    apiUrl: any;
    requestUri: any;
    headers: Headers;
    options: RequestOptions;
    opt: RequestOptionsArgs;

    constructor(public http: Http,
                public authService: AuthProvider,
                public _config: Config) {
        console.log('Hello ApiProvider Provider');

        this.apiUrl = _config.get('apiUrl');
        this.requestUri = _config.get('apiUrl') + _config.get('apiPath');

        // this.headers = new Headers({'Content-Type': 'application/json'});
        // this.headers.append('Authorization', 'Bearer ' + this.authService.access_token);

        this.opt = {
            headers: this.headers
        };

        this.options = new RequestOptions(this.opt);
    }

    get(resource: string, id: number): Promise<any> {

        return this.http.get(this.requestUri + "/" + resource + "/" + id, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }


    getAll(resource: string, params?: any): Promise<any> {

        let search = new URLSearchParams();

        for (let k in params) {
            if (k == 'fields' || k == 'filters') {
                search.set(k, JSON.stringify(params[k]));
            } else {
                search.set(k, params[k]);
            }
        }

        let options = new RequestOptions(this.opt);

        options.params = search;

        return this.http.get(this.requestUri + '/' + resource, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);


    }


    post(resource: string, params?: any) {
        return new Promise(
            (resolve, reject) => {
                this.http.post(this.requestUri + '/' + resource, params, this.options)
                    .subscribe(
                        res => {
                            resolve(res.json());
                        },
                        (err) => {
                            reject(err);
                            console.error('err', err)
                        }
                    );

            });
    }


    put(resource: any, id: number, params): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                return this.http.put(this.requestUri + "/" + resource + "/" + id, params, this.options)
                    .subscribe(
                        res => {
                            resolve(res.json());
                        },
                        (err) => {
                            reject(err);
                            console.error('err', err)
                        }
                    );

            });

    }

    patch(resource: any, id: number, params): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                return this.http.patch(this.requestUri + "/" + resource + "/" + id, params, this.options)
                    .subscribe(
                        res => {
                            resolve(res.json());
                        },
                        (err) => {
                            reject(err);
                            console.error('err', err)
                        }
                    );
            });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        // return Promise.reject(errMsg);
        console.error(errMsg);
        return Promise.reject(error);
    }
}
