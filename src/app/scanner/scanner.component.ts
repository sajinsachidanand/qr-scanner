import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  private scanning: boolean = true;
  private information: string = 'Scanning ....';

  @Output() qrCodeEvent = new EventEmitter<string>();

  constructor(
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  public scanningHandler($event: any) {
    this.scanning = false;
    this.information = $event;

    this.qrCodeEvent.emit(this.information);
  }

  public enableScanner() {
    this.scanning = !this.scanning;
    this.information = 'Scanning ....';
  }

}

interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}
