import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  BASE_API_URL = "https://rest.bandsintown.com/";


  constructor() { }
}
