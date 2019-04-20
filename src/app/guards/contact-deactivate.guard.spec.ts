import { TestBed, async, inject } from '@angular/core/testing';

import { ContactDeactivateGuard } from './contact-deactivate.guard';

describe('ContactDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactDeactivateGuard]
    });
  });

  it('should ...', inject([ContactDeactivateGuard], (guard: ContactDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
