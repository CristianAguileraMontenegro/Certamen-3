import { Clima } from "./clima";

export interface Regiones {
    nombreRegion:string;
    dias:Clima[];
}

let semanaValpo:Array<Clima> = [
    {nombreDia:"Lunes", estadoClima:"Soleado", temperatura:18},
    {nombreDia:"Martes", estadoClima:"Lluvioso", temperatura:9},
    {nombreDia:"Miercoles", estadoClima:"Nublado", temperatura:11},
    {nombreDia:"Jueves", estadoClima:"Tormenta", temperatura:7},
    {nombreDia:"Viernes", estadoClima:"Soleado", temperatura:22},
    {nombreDia:"Sabado", estadoClima:"Lluvioso", temperatura:10},
    {nombreDia:"Domingo", estadoClima:"Nublado", temperatura:7}
]

let semanaBio:Array<Clima> = [
    {nombreDia:"Lunes", estadoClima:"Soleado", temperatura:18},
    {nombreDia:"Martes", estadoClima:"Lluvioso", temperatura:9},
    {nombreDia:"Miercoles", estadoClima:"Nublado", temperatura:11},
    {nombreDia:"Jueves", estadoClima:"Tormenta", temperatura:7},
    {nombreDia:"Viernes", estadoClima:"Soleado", temperatura:22},
    {nombreDia:"Sabado", estadoClima:"Lluvioso", temperatura:10},
    {nombreDia:"Domingo", estadoClima:"Nublado", temperatura:7}
]

let semanaMetro:Array<Clima> = [
    {nombreDia:"Lunes", estadoClima:"Soleado", temperatura:18},
    {nombreDia:"Martes", estadoClima:"Lluvioso", temperatura:9},
    {nombreDia:"Miercoles", estadoClima:"Nublado", temperatura:11},
    {nombreDia:"Jueves", estadoClima:"Tormenta", temperatura:7},
    {nombreDia:"Viernes", estadoClima:"Soleado", temperatura:22},
    {nombreDia:"Sabado", estadoClima:"Lluvioso", temperatura:10},
    {nombreDia:"Domingo", estadoClima:"Nublado", temperatura:7}
]

let semanaArauco:Array<Clima> = [
    {nombreDia:"Lunes", estadoClima:"Soleado", temperatura:18},
    {nombreDia:"Martes", estadoClima:"Lluvioso", temperatura:9},
    {nombreDia:"Miercoles", estadoClima:"Nublado", temperatura:11},
    {nombreDia:"Jueves", estadoClima:"Tormenta", temperatura:7},
    {nombreDia:"Viernes", estadoClima:"Soleado", temperatura:22},
    {nombreDia:"Sabado", estadoClima:"Lluvioso", temperatura:10},
    {nombreDia:"Domingo", estadoClima:"Nublado", temperatura:7}
]

export let arregloRegiones:Array<Regiones> = [
    {nombreRegion:"Valparaiso",dias:semanaValpo},
    {nombreRegion:"Metropolitana",dias:semanaMetro},
    {nombreRegion:"BioBio",dias:semanaBio},
    {nombreRegion:"Araucania",dias:semanaArauco}
]

