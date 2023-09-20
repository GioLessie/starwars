import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class EntityArrayMaskPipe {
    transform(value, ...args) {
        return typeof value === 'string' || typeof value === 'number'
            ? value
            : `${value.length} items`;
    }
}
EntityArrayMaskPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: EntityArrayMaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EntityArrayMaskPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: EntityArrayMaskPipe, name: "entityArrayMask" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: EntityArrayMaskPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'entityArrayMask',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWFycmF5LW1hc2sucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvc3JjL3V0aWxzL3BpcGVzL2VudGl0eS1hcnJheS1tYXNrLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsU0FBUyxDQUFDLEtBQWlDLEVBQUUsR0FBRyxJQUFlO1FBQzdELE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDM0QsQ0FBQyxDQUFDLEtBQUs7WUFDUCxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7Z0hBTFUsbUJBQW1COzhHQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFIL0IsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsaUJBQWlCO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZW50aXR5QXJyYXlNYXNrJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVudGl0eUFycmF5TWFza1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdLCAuLi5hcmdzOiB1bmtub3duW10pOiB1bmtub3duIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcclxuICAgICAgPyB2YWx1ZVxyXG4gICAgICA6IGAke3ZhbHVlLmxlbmd0aH0gaXRlbXNgO1xyXG4gIH1cclxufVxyXG4iXX0=