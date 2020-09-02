import { Component } from '@angular/core';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent {
  public date = new Date('1963-01-12T00:00');
}
