import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private readonly http: HttpClient) {}

  saveBio = (bio: string) => null;
}
