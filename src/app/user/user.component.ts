import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  videos = ["Lorem ipsum dolor sit amet", "sit amet", "ipsum dolor","Lorem ipsum"];
  ngOnInit() {
  }

}
