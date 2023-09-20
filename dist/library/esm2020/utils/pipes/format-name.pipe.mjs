import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class FormatNamePipe {
    transform(value, ...args) {
        return value
            .replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        })
            .replace(/[_]/g, function (letter) {
            return ' ';
        });
    }
}
FormatNamePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FormatNamePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FormatNamePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: FormatNamePipe, name: "formatName" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: FormatNamePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'formatName',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW5hbWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvc3JjL3V0aWxzL3BpcGVzL2Zvcm1hdC1uYW1lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsR0FBRyxJQUFlO1FBQ3pDLE9BQU8sS0FBSzthQUNULE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxNQUFNO1lBQ25DLE9BQU8sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQzthQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxNQUFNO1lBQy9CLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzsyR0FUVSxjQUFjO3lHQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFIMUIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsWUFBWTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2Zvcm1hdE5hbWUnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWF0TmFtZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdW5rbm93biB7XHJcbiAgICByZXR1cm4gdmFsdWVcclxuICAgICAgLnJlcGxhY2UoL1xcYlthLXpdL2csIGZ1bmN0aW9uIChsZXR0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZXBsYWNlKC9bX10vZywgZnVuY3Rpb24gKGxldHRlcikge1xyXG4gICAgICAgIHJldHVybiAnICc7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=