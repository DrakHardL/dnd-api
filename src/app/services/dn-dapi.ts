import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DnDApi {
  private readonly domain: string = `https://www.dnd5eapi.co`;

  constructor(
    private readonly http: HttpClient
  ) { }
}
