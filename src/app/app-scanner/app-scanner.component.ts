import { Component, OnInit } from '@angular/core';
import { ChargerDetailsService } from '../charger-details.service';
import { ChargerDetail } from '../model/ChargerDetail.model';

@Component({
  selector: 'app-scanner',
  templateUrl: './app-scanner.component.html',
  styleUrls: ['./app-scanner.component.css']
})
export class AppScannerComponent implements OnInit {

  chargerDetail : ChargerDetail = { chargerId:'', location:'', status:''};

  isSuccess : boolean = false;

  constructor(private chargerDetails : ChargerDetailsService) { }

  ngOnInit() {
  }

  getQrCodeInfo(event : string){
    this.chargerDetails.getChargerInfo(event).subscribe(
      (data: ChargerDetail) => {
        console.log(data);
        this.chargerDetail = data
        if( data != undefined){
          this.isSuccess = true;
        }
      }); 
        
  }
}
