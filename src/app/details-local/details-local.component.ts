import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../interface/phone';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-details-local',
  templateUrl: './details-local.component.html',
  styleUrls: ['./details-local.component.css']
})
export class DetailsLocalComponent implements OnInit {

  phone: Phone;
  Des1: boolean ;
  Des2: boolean ;
  Des3: boolean ;
  Des4: boolean ;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private service: ServiceService
    
  ) {

  }

  ngOnInit() {

    this.activatedroute.params.subscribe(params => {

      this.phone = this.service.getById(params.id);
      console.log(this.phone)
    })
    
  }
  color(): string{
    if (this.phone.color) {
      console.log(this.phone)
      return `${this.phone.color}`

    } else {
      return `white`
    }
  }
  goToEdit(item: any): void {
    this.router.navigate(['edit', item.id]);
  }

}
