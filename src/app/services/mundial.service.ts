import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Mundial,
  PaisAnfitrion,
  Introduccion,
  Equipo,
  Grupo,
  Sede,
  Podio,
  Goleador,
} from '../interface/mundial';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class MundialService {
  constructor(private http: HttpClient) {}
  obtenerMundial(i: any) {
    let url = 'http://localhost:3000/api/';
    return this.http.get<Mundial[]>(url + i);
  }

  obtenerAnfitrion(i: any) {
    let url = `${environment.apiURL}/mundial/`;
    return this.http.get<PaisAnfitrion[]>(url + i);
  }
  obtenerIntroduccion(i: any) {
    let url = `${environment.apiURL}/introduccion/`;
    return this.http.get<Introduccion[]>(url + i);
  }
  obtenerEquipos(i: any) {
    let url = `${environment.apiURL}/equipos/`;
    return this.http.get<Equipo[]>(url + i);
  }
  obtenerGrupos(i: any) {
    let url = `${environment.apiURL}/grupos/`;
    return this.http.get<Grupo[]>(url + i);
  }
  obtenerSedes(i: any) {
    let url = `${environment.apiURL}/sedes/`;
    return this.http.get<Sede[]>(url + i);
  }
  obtenerPodio(i: any) {
    let url = `${environment.apiURL}/podio/`;
    return this.http.get<Podio[]>(url + i);
  }
  obtenerGoleadores(i: any) {
    let url = `${environment.apiURL}/goleadores/`;
    return this.http.get<Goleador[]>(url + i);
  }

}
