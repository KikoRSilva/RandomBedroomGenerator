import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Form } from 'src/app/shared/form.model';
import { RandomService } from 'src/app/shared/random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form: Form;
  title = 'RANDOM BEDROOM GENERATOR';
  submitted: boolean = false;

  constructor(
    private randomService: RandomService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.form = new Form();
    this.titleService.setTitle('Home | Random Bedroom Generator');
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.randomService.send(form.value);
    this.router.navigate(['/names']);
  }
}
