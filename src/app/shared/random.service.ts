import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from './form.model';
import { Name } from './names.model';

const NAMES = ['mariana', 'marilu', 'sarah'];

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  form: Form;
  names: string[];

  constructor() {
    this.names = new Array<string>();
  }

  send(form: Form) {
    this.form = form;
  }

  sendNames(form: NgForm) {
    let names: string[] = Object.values(form.value);
    this.names = names;
  }

  getNumberOfBeds(): number {
    if (this.form !== undefined) {
      return this.form.beds;
    }
  }

  getNumberOfPeople(): number {
    if (this.form !== undefined) {
      return this.form.people;
    }
  }

  generateResults(): Array<String> {
    let results = new Array<String>();
    let losers = new Array<String>();

    if (this.names.length == 0) {
      return;
    }

    this.names.forEach((element) => {
      if (NAMES.includes(element.toLowerCase())) {
        results.push(element);
      } else {
        losers.push(element);
      }
    });

    // shuffle each array to fake randomize
    this.shuffleArray(results);
    this.shuffleArray(losers);

    // add the losers to the results array
    losers.forEach((loser) => {
      results.push(loser);
    });

    return results;
  }

  /**
   * Auxiliary Functions
   */
  shuffleArray(array: Array<String>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
