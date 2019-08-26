export class Overtreding{
  id:number;
  datum_vaststelling_jaar : number;
  datum_vaststelling_maand: number;
  datum_vaststelling : Date;
  opnameplaats_straat : string;
  opnameplaats_rijrichting_gaand : string;
  opnameplaats_zone_snelheid : number;
  aantal_passanten : number;
  aantal_overtredingen_snelheid : number;
  aantal_overtredingen_roodlicht : number;
  constructor(
      id:number,
      datum_vaststelling_jaar : number,
      datum_vaststelling_maand: number,
      datum_vaststelling : Date,
      opnameplaats_straat : string,
      opnameplaats_rijrichting_gaand : string,
      opnameplaats_zone_snelheid : number,
      aantal_passanten : number,
      aantal_overtredingen_snelheid : number,
      aantal_overtredingen_roodlicht : number
  ){
    this.id = id;
    this.datum_vaststelling_jaar = datum_vaststelling_jaar;
    this.datum_vaststelling_maand = datum_vaststelling_maand;
    this.datum_vaststelling = datum_vaststelling;
    this.opnameplaats_straat = opnameplaats_straat;
    this.opnameplaats_rijrichting_gaand = opnameplaats_rijrichting_gaand;
    this.opnameplaats_zone_snelheid = opnameplaats_zone_snelheid;
    this.aantal_passanten = aantal_passanten;
    this.aantal_overtredingen_snelheid = aantal_overtredingen_snelheid;
    this.aantal_overtredingen_roodlicht = aantal_overtredingen_roodlicht;
  }
}