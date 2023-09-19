import { SwapiServiceService } from './../../../services/swapi-service.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DTOFormEntityDetail, isParsableToInt } from 'src/app/utils';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.scss'],
})
export class EntityDetailComponent implements OnInit {
  activeEntityType!: string;
  activeEntityId!: string;
  activeEntity!: any;
  form: FormGroup = new FormGroup({});
  formItems: string[] = [];
  isDataLocal: boolean = false;

  constructor(
    public swapiService: SwapiServiceService,
    public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public localStorageService: LocalStorageService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.readParams();
    this.loadEntityDataFromLocalstorage();
  }

  /**
   * The function loads entity data from local storage and if it is not available, it loads it from an
   * API.
   */
  loadEntityDataFromLocalstorage() {
    this.localStorageService
      .getEntity(this.activeEntityType, this.activeEntityId)
      .then((entity) => {
        this.isDataLocal = true;
        this.activeEntity = JSON.parse(entity);
        this.buildForm(JSON.parse(entity));
      })
      .catch(() => {
        this.isDataLocal = false;
        this.loadEntityDataFromApi();
      });
  }

  /**
   * The function loads entity data from an API and assigns it to the activeEntity variable, then
   * builds a form based on the entity data.
   */
  loadEntityDataFromApi() {
    this.swapiService
      .getEntity(this.activeEntityType, this.activeEntityId)
      .subscribe((entity: any) => {
        this.activeEntity = entity;
        this.buildForm(entity);
      });
  }

  /**
   * The function "buildForm" creates a form group with form controls based on the properties of an
   * entity object, and adds validation rules to each form control.
   * @param {any} entity - The `entity` parameter is an object that represents the data structure for
   * which the form is being built. It contains properties that define the form fields and their initial
   * values.
   */
  buildForm(entity: any) {
    const formGroup: any = {};
    this.formItems = [];
    Object.keys(entity).forEach((entityProp) => {
      this.formItems.push(entityProp);
      formGroup[entityProp] = [
        entity[entityProp],
        this.buildValidations(entity, entityProp),
      ];
    });
    this.form = this.fb.group(formGroup);
  }

  /**
   * The readParams function reads the entityType and entityId parameters from the activated route
   * snapshot and assigns them to the activeEntityType and activeEntityId variables respectively.
   */
  async readParams() {
    this.activeEntityType =
      this.activatedRoute.snapshot.paramMap.get('entityType') || '';
    this.activeEntityId =
      this.activatedRoute.snapshot.paramMap.get('entityId') || '';
  }

  /**
   * The function builds an array of validations based on the given entity and entity property name.
   * @param {any} entity - The `entity` parameter is an object that represents an entity or an object
   * that contains properties.
   * @param {string} entityProp - The `entityProp` parameter is a string that represents the name of
   * the `entity` object.
   * @returns an array of validation functions.
   */
  buildValidations(entity: any, entityProp: string) {
    const validations = [Validators.required];
    if (isParsableToInt(entity[entityProp])) {
      validations.push(Validators.pattern('^[0-9]*$'));
    }
    if (entityProp === 'manufacturer') {
      validations.push(Validators.maxLength(100));
    }
    return validations;
  }

  /**
   * The function saves the active entity data locally using the localStorageService.
   */
  saveDataLocally() {
    this.localStorageService
      .setEntity(this.activeEntityType, this.activeEntityId, this.activeEntity)
      .then((arg) => {
        this.isDataLocal = true;
      });
  }

  /**
   * The function updates the local data by creating a new entity object from a form, logging it to the
   * console, and then storing it in local storage.
   */
  updateDataLocally() {
    const newEntity = DTOFormEntityDetail(this.form, this.activeEntity);
    this.localStorageService
      .setEntity(this.activeEntityType, this.activeEntityId, newEntity)
      .then((arg) => {
        this.activeEntity = newEntity;
        this.loadEntityDataFromLocalstorage();
      });
  }

  /**
   * The function `deleteDataLocally` deletes an entity from local storage after converting it to a DTO
   * form entity detail and logging the new entity.
   */
  deleteDataLocally() {
    this.localStorageService
      .deleteEntity(this.activeEntityType, this.activeEntityId)
      .then((arg) => {
        this.activeEntity = {};
        this.loadEntityDataFromLocalstorage();
        this.isDataLocal = false;
      });
  }
}
