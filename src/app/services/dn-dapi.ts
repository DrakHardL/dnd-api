import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ReferenceInfo {
  index: string,
  name: string,
  url: string,
}

interface Class {
  index: string,
  name: string,
  hit_die: number,
  proficiency_choices: {
    desc: string,
    choose: number,
    type: string,
    from: {
      option_set_type: string,
      options: {
        option_type: string,
        item: ReferenceInfo,
      }[],
    },
  }[],
  proficiencies: ReferenceInfo[],
  saving_throws: ReferenceInfo[],
  starting_equipment: {
    equipment: ReferenceInfo,
    quantity: number,
  }[],
  class_levels: string,
  multi_classing: {
    prerequisites: {
      ability_score: ReferenceInfo,
      minimum_score: number,
    }[],
    proficiencies: ReferenceInfo[],
  },
  subclasses: ReferenceInfo[],
  url: string,
  updated_at: string,
}

@Injectable({
  providedIn: 'root'
})
export class DnDApi {
  private readonly domain: string = `https://www.dnd5eapi.co/api/2014/`;

  constructor(
    private readonly http: HttpClient
  ) { }

  getClasses(): Observable<{ count: number, results: ReferenceInfo[] }> {
    return this.http.get<{ count: number, results: ReferenceInfo[] }>(`${this.domain}/classes`);
  }

  getClass(index: string): Observable<Class> {
    return this.http.get<Class>(`${this.domain}/classes/${index}`)
  }
}
