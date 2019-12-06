import { Component, OnInit } from '@angular/core';
import { INoRowsOverlayAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-dropdown-cell-renderer',
  template: `
            <span>
                {{value}}
            </span>
  `,
  styleUrls: ['./dropdown-cell-renderer.component.scss']
})
export class DropdownCellRendererComponent implements INoRowsOverlayAngularComp {
  private imageSource: string;
  private value: any;

  agInit(params): void {
      this.value = params.value;
  }
};
