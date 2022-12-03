import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Introduccion, Mundial, PaisAnfitrion, Equipo, Grupo, Sede, Podio, Goleador } from 'src/app/interface/mundial';
import { MundialService } from 'src/app/services/mundial.service';
@Component({
  selector: 'app-mundial',
  templateUrl: './mundial.component.html',
  styleUrls: ['./mundial.component.css'],
})
export class MundialComponent implements OnInit {
  anfitrion: PaisAnfitrion[] = [];
  introduccion: Introduccion[] = [];
  equipos: Equipo[] = [];
  grupos: Grupo[] = [];
  sedes: Sede[] = [];
  podios: Podio[] = [];
  goleadores: Goleador[] = [];
  id:number = 0;



  constructor(
    private ruta: ActivatedRoute,
    private mundialService: MundialService
  ) {}

  ngOnInit(): void {

    this.ruta.params.subscribe((params) => {
      this.id = params['id']

      this.mundialService.obtenerAnfitrion(params['id']).subscribe((data) => {
        this.anfitrion = data;        
      });

      this.mundialService
        .obtenerIntroduccion(params['id'])
        .subscribe((data) => {
          this.introduccion = data;
        });

      this.mundialService.obtenerEquipos(params['id']).subscribe((data) => {
        this.equipos = data;
      });

      if(params['id'] !=2 && params['id'] !=3){
        this.mundialService.obtenerGrupos(params['id']).subscribe((data) => {
          this.grupos = data;
        }); 

      }

      this.mundialService.obtenerSedes(params['id']).subscribe((data) => {
        this.sedes = data;
      });

      this.mundialService.obtenerPodio(params['id']).subscribe((data) => {
        this.podios = data;
      });

      this.mundialService.obtenerGoleadores(params['id']).subscribe((data) => {
        this.goleadores = data;
      });
    });
  }
}
