import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from './form.model';
import { Name } from './names.model';

const NAMES = ['mariana', 'marilu', 'sarah', 'sara'];

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
    // instantiate the arrays
    let results = new Array<String>();
    let losers = new Array<String>();
    let winners = new Array<String>();

    // someone is trying to achieve by url
    if (this.names.length == 0) {
      return;
    }

    this.names.forEach((element) => {
      if (NAMES.includes(element.toLowerCase())) {
        winners.push(element);
      } else {
        losers.push(element);
      }
    });

    // shuffle each array to fake randomize
    this.shuffleArray(winners);
    this.shuffleArray(losers);
    console.log(winners);
    console.log(losers);

    let size = this.names.length;
    console.log('size: ', size);
    for (let i = 0; i < size; i++) {
      if (i == 2 || i == 3) {
        results.push(winners.pop());
      } else {
        results.push(losers.pop());
      }
    }
    console.log(results);

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
