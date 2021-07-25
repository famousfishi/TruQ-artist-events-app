import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import {retry} from 'rxjs/operators';
import { Events } from '../interfaces/events';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private envService: EnvService) { }

  async getUpcomingEvents(artistName : string) {
		return await new Promise((resolve, reject) => {
			this.http.get<Events>(`${this.envService.BASE_API_URL}artists/${artistName}/events?app_id=1`).pipe(retry(3))
				.subscribe(data => {
					resolve(data);
				}, error => {
					reject(error);
				})
		})
	}
}
