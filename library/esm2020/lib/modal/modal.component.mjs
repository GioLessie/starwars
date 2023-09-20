import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/dialog";
export class ModalComponent {
}
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ModalComponent, selector: "lib-modal", ngImport: i0, template: "<h1 mat-dialog-title>Important!</h1>\r\n<div mat-dialog-content>Are you sure you want to procced?</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>No</button>\r\n  <button mat-button mat-dialog-close cdkFocusInitial [mat-dialog-close]=\"true\">\r\n    Ok\r\n  </button>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i2.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i2.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i2.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i2.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-modal', template: "<h1 mat-dialog-title>Important!</h1>\r\n<div mat-dialog-content>Are you sure you want to procced?</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>No</button>\r\n  <button mat-button mat-dialog-close cdkFocusInitial [mat-dialog-close]=\"true\">\r\n    Ok\r\n  </button>\r\n</div>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9zcmMvbGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvc3JjL2xpYi9tb2RhbC9tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzFDLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOytGQUFkLGNBQWMsaURDUDNCLHVUQVFBOzJGRERhLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcblxyXG59XHJcbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkltcG9ydGFudCE8L2gxPlxyXG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcHJvY2NlZD88L2Rpdj5cclxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XHJcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2U+Tm88L2J1dHRvbj5cclxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZSBjZGtGb2N1c0luaXRpYWwgW21hdC1kaWFsb2ctY2xvc2VdPVwidHJ1ZVwiPlxyXG4gICAgT2tcclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiJdfQ==