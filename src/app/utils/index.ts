import { FormGroup } from '@angular/forms';

export const PROPS_TO_SHOW_BY_FILM: string[] = [
  'episode_id',
  'title',
  'director',
  'starships',
  'vehicles',
  'planets',
];

export const PROPS_TO_SHOW_BY_ENTITY: any = {
  planets: ['name', 'climate', 'rotation_period', 'diameter', 'gravity'],
  starships: ['name', 'passengers'],
  people: ['name', 'gender', 'films'],
  vehicles: ['name', 'model', 'crew'],
};

export const getEntityId = (entityUrl: string) => {
  return entityUrl.substring(entityUrl.search(/[0-9]/), entityUrl.length - 1);
};

export const isParsableToInt = (value: string) => {
  return typeof value !== 'object' ? value.match(/[a-zA-Z]/g) === null : false;
};

export const DTOFormEntityDetail = (form: FormGroup, oldEntity: any) => {
  const newEntity: any = {};
  Object.keys(oldEntity).forEach((entityKey: string) => {
    newEntity[entityKey] = form.controls[entityKey].value;
  });
  return newEntity;
};
