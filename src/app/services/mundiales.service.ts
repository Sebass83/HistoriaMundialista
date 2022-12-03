import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PaisAnfitrion } from '../interface/mundial';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MundialesService {
 // public mundiales:PaisAnfitrion[];  

  
  
  constructor(private http:HttpClient) { 

  }
  todosLosMundiales():Observable<PaisAnfitrion[]> {
    let url = environment.apiURL
    return this.http.get<PaisAnfitrion[]>(url)
  }



}
