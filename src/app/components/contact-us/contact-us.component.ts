import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public commentForm: FormGroup;
  public constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ''
    });
  }
  public submit(): void {
    setTimeout(() => this.commentForm.reset(), 1000);
  }
  public isFormEdit(): boolean {
    return this.commentForm.dirty;
  }
  public cancel(): void {
    this.router.navigate(['/hotels']);
  }
}
