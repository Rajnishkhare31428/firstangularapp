import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;
  title = 'myfirstangularproject';
  myName = 'Rajnish khare';
  constructor() {
    alert('Constructor function called' + ++this.value);
   }

  ngOnInit(): void {
    alert('ngOnInit function called' + ++this.value);
  }
}
