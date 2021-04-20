import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Name } from 'src/app/shared/names.model';
import { RandomService } from 'src/app/shared/random.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss'],
})
export class NamesComponent implements OnInit {
  names: Name[];
  bedsQuantity: number[];
  showSpinner: boolean = false;
  sharedBeds: number = 0;

  constructor(private randomService: RandomService, private router: Router) {
    this.names = new Array<Name>();
  }

  ngOnInit(): void {
    let people: number = this.randomService.getNumberOfPeople();
    let beds: number = this.randomService.getNumberOfBeds();

    if (beds !== undefined && people !== undefined) {
      if (people > beds) {
        this.sharedBeds = (people % beds) * 2;
      }

      this.bedsQuantity = Array(beds)
        .fill(1)
        .map((x, i) => i + 1);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  onSubmit(form: NgForm) {
    this.showSpinner = true;
    this.randomService.sendNames(form);
    setTimeout(() => {
      this.router.navigate(['/results']);
    }, 3000);
  }
}
