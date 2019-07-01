import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { ExpenInterface } from './expenseInterface';
import { ItemsList } from './itemsInterface';
import { Subject } from 'rxjs';
import { R3BoundTarget } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ExpensesserviceService {

  url = '/assets/data/category.json';
  itemsUrl = 'assets/data/items.json';
  totalBudget: number;

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:no-trailing-whitespace

  getExpense(): Observable<ExpenInterface[]> {
    return this.http.get<ExpenInterface[]>(this.url);
  }
  getItemList(): Observable<ItemsList[]> {
    return this.http.get<ItemsList[]>(this.itemsUrl);
  }
  setBudget(data) {
    this.totalBudget = data;
    console.log(data);
  }
  getBudget() {
    return this.totalBudget;
  }
}
