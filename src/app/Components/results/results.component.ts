import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/random.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  results = new Array<String>();
  constructor(private randomService: RandomService, private router: Router) {
    this.results = this.randomService.generateResults();
    if (!this.results) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}
}
