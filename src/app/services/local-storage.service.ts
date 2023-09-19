import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ModalComponent,
  SnackBarComponent,
} from 'projects/library/src/public-api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * This constructor initializes the dialog and snackbar services.
   * @param {MatDialog} dialog - The "dialog" parameter is of type MatDialog, which is a service
   * provided by Angular Material. MatDialog is used to open dialog windows, such as modal dialogs or
   * pop-up dialogs, in an Angular application.
   * @param {MatSnackBar} snackBar - The `_snackBar` parameter is an instance of the `MatSnackBar`
   * service, which is used to display snack bar notifications in Angular Material. Snack bars are used
   * to show brief messages to the user, typically at the bottom of the screen.
   */
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  /**
   * The function `getEntity` retrieves an entity from local storage based on its name and ID.
   * @param {string} entityName - The `entityName` parameter is a string that represents the name of the
   * entity you want to retrieve from the local storage. It could be any valid string that identifies the
   * entity you are interested in, such as "user", "product", or "order".
   * @param {string} entityId - The `entityId` parameter is a string that represents the unique
   * identifier of the entity you want to retrieve.
   * @returns A Promise is being returned.
   */
  getEntity(entityName: string, entityId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const item = localStorage.getItem(`${entityName}/${entityId}`);
      if (item) {
        resolve(item);
      } else {
        reject();
      }
    });
  }

  /**
   * The `setEntity` function saves an entity to the local storage after confirming with the user and
   * displays a confirmation message.
   * @param {string} entityName - The entityName parameter is a string that represents the name or type
   * of the entity being stored. It is used as part of the key when storing the entity in the
   * localStorage.
   * @param {string} entityId - The `entityId` parameter is a string that represents the unique
   * identifier of the entity. It is used as part of the key when storing the entity in the local
   * storage.
   * @param {any} entity - The `entity` parameter is an object that represents the data of the entity you
   * want to store in the local storage.
   */
  setEntity(entityName: string, entityId: string, entity: any) {
    return new Promise((resolve, reject) => {
      this.openConfirmationDialog().subscribe((result) => {
        if (result) {
          localStorage.setItem(
            `${entityName}/${entityId}`,
            JSON.stringify(entity)
          );
          this.showConfirmationSnackbar();
          resolve(true);
        }
      });
    });
  }

  /**
   * The `deleteEntity` function deletes an entity from local storage after confirming with the user
   * through a dialog.
   * @param {string} entityName - The `entityName` parameter is a string that represents the name of the
   * entity you want to delete. It could be the name of a user, a product, or any other entity in your
   * application.
   * @param {string} entityId - The `entityId` parameter is a string that represents the unique
   * identifier of the entity that needs to be deleted.
   */
  deleteEntity(entityName: string, entityId: string) {
    return new Promise((resolve, reject) => {
      this.openConfirmationDialog().subscribe((result) => {
        if (result) {
          localStorage.removeItem(`${entityName}/${entityId}`);
          this.showConfirmationSnackbar();
          resolve(true);
        }
      });
    });
  }

  /**
   * The function opens a confirmation dialog and returns an Observable that emits the result when the
   * dialog is closed.
   * @returns The openConfirmationDialog() function returns an Observable<any>.
   */
  openConfirmationDialog(): Observable<any> {
    return this.dialog
      .open(ModalComponent, {
        width: '350px',
      })
      .afterClosed();
  }

  /**
   * The function `showConfirmationSnackbar` opens a snackbar component with a duration of 1000
   * milliseconds.
   */
  showConfirmationSnackbar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 1000,
    });
  }
}
