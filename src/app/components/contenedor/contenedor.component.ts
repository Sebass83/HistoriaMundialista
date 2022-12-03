import { Component, OnInit } from '@angular/core';
import { PaisAnfitrion } from 'src/app/interface/mundial';
import { MundialesService } from 'src/app/services/mundiales.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css'],
})
export class ContenedorComponent implements OnInit {
  mundiales: PaisAnfitrion[] = [];

  constructor(private mundialesService: MundialesService) {}

  ngOnInit(): void {
    this.mundialesService.todosLosMundiales().subscribe((data) => {
      this.mundiales = data;
    });
  }
}
