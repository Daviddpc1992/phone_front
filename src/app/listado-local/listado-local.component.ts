import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../interface/phone';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-listado-local',
  templateUrl: './listado-local.component.html',
  styleUrls: ['./listado-local.component.css']
})
export class ListadoLocalComponent implements OnInit {

  Arrayphones: Phone[] = [];
  phone
  pageActual: number = 1;
  down: boolean = false;

  constructor(private service: ServiceService, private router: Router,
    private activatedRouter: ActivatedRoute) { }


  async ngOnInit():Promise <void>{
    const phones = await this.service.getAlllocal();
    this.Arrayphones = phones;

  }
  goToDetails(item: any): void {
    this.router.navigate(['phones', item.id]);
  }

  color(): string{
    if (this.phone.color) {
      console.log(this.phone)
      return `${this.phone.color}`

    } else {
      return `white`
    }
  }

}
