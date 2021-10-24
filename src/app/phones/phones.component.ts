import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../interface/phone';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  Arrayphones: Phone[] = [];
  phone
  pageActual: number = 1;

  constructor(private service: ServiceService, private router: Router,
    private activatedRouter: ActivatedRoute,) {
  }

  async ngOnInit():Promise <void>{
    const phones = await this.service.getAll();
    this.Arrayphones = phones;
  
  }
  goToDetails(item: any): void {
    this.router.navigate(['phone', item.id]);
  }
  color(): string{
    if (this.phone.color) {
      console.log(this.phone)
      return `${this.phone.color}`

    } else {
      return `white`
    }
  }
  goToEd
}
