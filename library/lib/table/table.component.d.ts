import { EventEmitter } from '@angular/core';
import { EntityEvent, RowEvent } from '../../utils/model/table.model';
import * as i0 from "@angular/core";
export declare class TableComponent {
    displayedColumns: string[];
    dataSource: any[];
    enableClickInRow: boolean;
    entityClickHandler: EventEmitter<EntityEvent>;
    rowClickHandler: EventEmitter<RowEvent>;
    constructor();
    isArray(item: any): boolean;
    handleEntityClick(row: any, name: string): void;
    handleRowClick(row: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "lib-table", never, { "displayedColumns": "displayedColumns"; "dataSource": "dataSource"; "enableClickInRow": "enableClickInRow"; }, { "entityClickHandler": "entityClickHandler"; "rowClickHandler": "rowClickHandler"; }, never, never, false, never>;
}
