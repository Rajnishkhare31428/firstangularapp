import { Component } from '@angular/core';

@Component({
  selector: 'app-xroot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;
  title = 'myfirstangularproject';
  myName = 'Rajnish khare';
  constructor() {
   }

  ngOnInit(): void {
  }
}
