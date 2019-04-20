import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-contacts',
  templateUrl: './hotel-contacts.component.html',
  styleUrls: ['./hotel-contacts.component.css']
})
export class HotelContactsComponent implements OnInit {
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
  }
  public isFormEdit(): boolean {
    return this.commentForm.dirty;
  }
  public cancel(): void {
    const hotelId: string = (this.ar.url as BehaviorSubject<any>).getValue()[1].path;
    this.router.navigate(['/hotels', hotelId]);
  }
}
