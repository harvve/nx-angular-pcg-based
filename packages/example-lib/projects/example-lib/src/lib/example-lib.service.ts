import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleLibService {
  constructor() {}

  public getName(): string {
    return ExampleLibService.name;
  }
}
