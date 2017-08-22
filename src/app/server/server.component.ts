import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    styles: [`
        h4 {
            color: dodgerblue;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor () {
        console.log('constructor called!');
    }

    getServerStatus () {
        return this.serverStatus;
    }
}
