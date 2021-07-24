import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  BASE_API_URL = "https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0/";


  constructor() { }
}
