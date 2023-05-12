import { Component, OnInit } from '@angular/core';
import { Payload } from './payload';
import { HornService } from './horn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'First App';
  listAll: Payload[] = [];
  url: string = "places";

  constructor(private hornService: HornService) {}

  ngOnInit(): void {
    this.showAll();
  }

  showAll(): void {
    this.hornService.getAllObjects(this.url).subscribe(Payload => this.listAll = Payload);
  }


}
