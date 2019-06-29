import { TestBed } from '@angular/core/testing';

import { ExpensesserviceService } from './expensesservice.service';

describe('ExpensesserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensesserviceService = TestBed.get(ExpensesserviceService);
    expect(service).toBeTruthy();
  });
});
