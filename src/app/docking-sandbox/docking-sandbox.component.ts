import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DockingLayoutComponent } from '@smart-webcomponents-angular/dockinglayout';

@Component({
  selector: 'app-docking-sandbox',
  templateUrl: './docking-sandbox.component.html',
  styleUrls: ['./docking-sandbox.component.scss']
})
export class DockingSandboxComponent implements OnInit, AfterViewInit {

  @ViewChild("dockingLayout", { read: DockingLayoutComponent, static: false }) dockingLayout!: DockingLayoutComponent;

  layout: Array<object> = [
    {
      type: 'LayoutGroup',
      orientation: 'horizontal',
      items: [
        {
          type: 'LayoutPanel',
          headerPosition: 'none',
          items: [
            {
              label: 'Tab 1',
              content: 'Tab 1 Content'
            },
            {
              label: 'Tab 2',
              content: 'Tab 2 Content'
            },
          ]
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
