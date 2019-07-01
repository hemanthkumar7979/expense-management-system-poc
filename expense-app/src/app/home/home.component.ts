import { Component, OnInit, OnChanges } from '@angular/core';
import { ExpensesserviceService } from '../expensesservice.service';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
   providers: [ExpensesserviceService]
})
export class HomeComponent implements OnInit {

   errordata: number;
   setBudget = 200000;
   expenselist = [];
   constructor(private expenses: ExpensesserviceService) { }

   ngOnInit() {
      console.log('this is ngoninit');
      this.expenses.getExpense().subscribe(
         (categoryData) => {
            console.log('this is observer');
            this.expenselist = categoryData;
         } ,
         (error) => {
            this.errordata = error.status;
         });
   }

}
