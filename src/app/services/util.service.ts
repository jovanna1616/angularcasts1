import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  public capitalize(word): string {
    // take first letter and capitalize it.Then add the rest letters of the word
    return word.charAt(0).toUpperCase() + word.substr(1);
  }

}
