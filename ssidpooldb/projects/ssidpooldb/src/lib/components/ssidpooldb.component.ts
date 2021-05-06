import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-ssidpooldb',
    templateUrl: './ssidpooldb.component.html',
    styleUrls: ['./ssidpooldb.component.css']
})
export class ssidpooldbComponent implements OnInit {
    constructor(private API: ApiService) { }
    SSIDPoolArray = [["coucou", "hello"],["try", "waw"]]
    GetSSIDSavedPool(): void {
        this.API.request({
            module: 'ssidpooldb',
            action: 'GetSSIDSavedPool'
        }, (response) => {
            
            this.SSIDPoolArray = response;
            
        })
    }
    ngOnInit() {
    }
}
