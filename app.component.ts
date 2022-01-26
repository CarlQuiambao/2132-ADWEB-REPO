import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = 'One way data binding example.';

  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 50;
  n2 = 20;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = "Gelo";

  //style binding
  appliedCSSClass = "green";
  notappliedCSS = true;
  myColor = "magenta";

  //two way data binding
  showData($event:any){
    console.log("Button is clicked.")
  }

  //keyup function
  getData(data:any){
    console.warn(data)
  }
}
