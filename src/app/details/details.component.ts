import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../interface/phone';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  phone: Phone;
  Des1: boolean = false;
  Des2: boolean = false;
  Des3: boolean = false;
  Des4: boolean = false;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private service: ServiceService
    
  ) {

  }

  ngOnInit() {

    this.activatedroute.params.subscribe((async params => {
      console.log(params);
      this.phone = await this.service.getByIdPhone(parseInt(params.id))
       console.log(this.phone[0].color)
      
    }))
    
  }
  color(): string{
    if (this.phone[0].color) {
      console.log(this.phone)
      return `${this.phone[0].color}`

    } else {
      return `white`
    }
  }
  goToEdit(item: any): void {
    this.router.navigate(['edit', item.id]);
  }

}
  


