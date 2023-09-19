import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isArray } from '../../utils';
import { EntityEvent, RowEvent } from '../../utils/model/table.model';
@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];
  @Input() enableClickInRow: boolean = false;
  @Output() entityClickHandler = new EventEmitter<EntityEvent>();
  @Output() rowClickHandler = new EventEmitter<RowEvent>();

  constructor() {}

  public isArray(item: any) {
    return isArray(item);
  }

  public handleEntityClick(row: any, name: string) {
    if (this.enableClickInRow) {
      return;
    }
    this.entityClickHandler.emit({
      row: row,
      entityName: name,
    });
  }

  public handleRowClick(row: any) {
    if (!this.enableClickInRow) {
      return;
    }
    this.rowClickHandler.emit({
      row: row,
    });
  }
}
