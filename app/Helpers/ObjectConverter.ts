import { Planet }  from '../Planet/Planet';
import { People }  from '../People/People';
export class ObjectConverter {


  public convertResponseToPlanet(r:any): Planet{

    let planet = <Planet>({
      name: r.name,
      rotation_period: r.rotation_period,
      orbital_period: r.orbital_period,
      diameter: r.diameter,
      terrain: r.terrain,
      climate: r.climate,
      gravity: r.gravity,
      surface_water: r.surface_water,
      population: r.population,
    });

    return planet;
  };

  public convertResponseToPeople(r:any): People{

    let people = <People>({
      birth_year: r.birth_year,
      eye_color: r.eye_color,
      openingCrawl: r.openingCrawl,
      gender: r.gender,
      hair_color: r.hair_color,
      height: r.height,
      homeworld: r.homeworld,
      mass: r.mass,
      name: r.name,
      skin_color: r.skin_color,
      created: r.created,
      edited: r.edited,
    });

    return people;
  };

}
