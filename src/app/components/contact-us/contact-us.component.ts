import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/store/reducers';
import * as RouterActions from '../../store/actions/router.actions';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public commentForm: FormGroup;
  public constructor(
    private formBuilder: FormBuilder,
    private store: Store<IState>
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
    this.store.dispatch(new RouterActions.Go({
      path: ['/hotels'],
    }));
  }
}
