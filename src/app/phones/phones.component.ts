import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../interface/phone';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ServiceService } from '../service/service.service';
declare var Swal;
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  Arrayphones: Phone[] = [];
  phone
  pageActual: number = 1;
  Edit: boolean = false;

  constructor(private service: ServiceService, private router: Router,
    private activatedRouter: ActivatedRoute) {
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
  DeleteProducto(phone): void {

    console.log(phone)
    const pId = this.service.delete(phone.id)
      .then((response) => {
        console.log(response)
        if (response['error']) {
          console.log('error')
        }
        else {
          console.log(pId)
          Swal.fire({
            title: '¡Ups!...',
            text: 'Phone Deleted',
            imageWidth: 400,
            imageHeight: 200,
       
          })
          this.service.getAll()
          .then((response) => {
            console.log(response)
            this.Arrayphones = response;
      
          })
          .catch((error) => console.log(error));
        
        }
          
        }
      )
  

  }
}
