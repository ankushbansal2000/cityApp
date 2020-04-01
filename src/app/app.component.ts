import { Component } from '@angular/core';
import { KEYS } from './framework/StorageUtil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cityApp';

  number : string = '24cdc839-b05d-4f66-bda7-80a1cf546959';
  ngOnInit() {
    //  sessionStorage.setItem(KEYS.TOKEN, this.number);
    
  } 
}
