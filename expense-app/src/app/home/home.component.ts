import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  expenselist = [
    {caterory: 'Grocery',
     itemname: 'Bread',
     amount: 40,
     expensedate: '23/04/2019'
  },
  {caterory: 'Grocery',
     itemname: 'Bread',
     amount: 40,
     expensedate: '23/04/2019'
  },
  {caterory: 'Grocery',
     itemname: 'Bread',
     amount: 40,
     expensedate: '23/04/2019'
  },
  {caterory: 'Grocery',
     itemname: 'Bread',
     amount: 40,
     expensedate: '23/04/2019'
  },
  {caterory: 'Grocery',
     itemname: 'Bread',
     amount: 40,
     expensedate: '23/04/2019'
  }
  ] ;
  constructor() { }

  ngOnInit() {
  }

}
