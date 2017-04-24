import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestService } from './rest.service';

@Injectable()
export class RoomService {

    constructor(private restService: RestService, private http: Http) {

    }
    //Request data for rooms as observable.
    //Can be subscribed on to
    getAllRooms(): Observable<any> {
        return this.http.get('https://private-66479-hospiqtest.apiary-mock.com/units')
                    .map(this.restService.extractData)
                    .catch(this.restService.handleServerError)
    }

}
