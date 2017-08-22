import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  clicks = 0;
  logs: any[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer () {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was create!';
  }

  onUpdateServerName (evt: any) {
    console.log(evt);
    this.serverName = evt.target.value;
  }

  onDisplayClick (e) {
    this.clicks += 1;
    this.logs.push({
      order: this.clicks,
      name: `Event ${e.target.type} was fired ...`,
      date: new Date()
    });
  }
}
