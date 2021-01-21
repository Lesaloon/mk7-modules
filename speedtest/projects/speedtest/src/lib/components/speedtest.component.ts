import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-speedtest',
    templateUrl: './speedtest.component.html',
    styleUrls: ['./speedtest.component.css']
})

export class speedtestComponent implements OnInit {
    constructor(private API: ApiService) { }
    isNumeric = (n) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    CheckIp = (ip) => {
        
        if (ip.split('.').length != 4) {
            return false
        }
    
        ip.split('.').forEach(element => {
            if (!this.isNumeric(element)) {
                return false
            }
        });
        return true
    }
    IpInput = "8.8.8.8"
    APIPing = 'Press the "Test Connection" button'
    /*APIUpload = 'Press the "Test Connection" button'
    APIDownload = 'Press the "Test Connection" button'*/
    TestConnection(): void {
        if ( this.CheckIp(this.IpInput) ) {
            this.API.request({
                module: 'speedtest',
                action: 'TestConnection',
                Ip: this.IpInput
            }, (response) => {
                console.log(response);
                this.APIPing = response;
                
            })
        }
    }
    ngOnInit() {
    }
}
