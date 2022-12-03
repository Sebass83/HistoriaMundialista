
export interface Mundial {
        equipos: Equipo[];
        goleadores: Goleador[];
        grupos?: Grupo[];
        introduccion: Introduccion[];
        mundial:PaisAnfitrion[];
        podios: Podio[];     
        sedes: Sede[];
           
}

export interface PaisAnfitrion{
    idmundial: Number;
    anio: Number;
    anfitrion: String;
}

export interface Introduccion{    
        idporgrupos: Number;
        introduccion: String;
}  

export interface Equipo{
    pais: String;
}

export interface Grupo{
    grupo: Number;
    pais: String;

}

export interface Sede{
    idsedes: Number;
    lugar: String;
    estadio: String;
}

export interface Podio{
    puesto: Number;
    pais: String;
}

export interface Goleador{
    idgoleadores: Number;
    jugador: String;
    seleccion: String;
    goles: String;
}
