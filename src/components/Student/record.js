import { List, Map, Record } from 'immutable';

export default class StudentRecord extends Record({
  id: '',
  userId: '',
  firstName: '',
  secondName: '',
  middleName: '',
  picture: '/assets/images/avatar-default-rect.jpg',
  schoolId: '',
  classUnitId: '',
  mark: '',
  groups: new Map(),
  variants: new Map(),
}) {
  getVariants() {
    return this
      .get('variants')
      .reduce((filteredList, variant) => {
        if (filteredList.some(uniqueVariant => uniqueVariant.get('id') === variant.get('id'))) {
          return filteredList;
        }
        return filteredList.push(variant);
      }, new List());
  }
  hasVariants() {
    return this.get('variants').size > 0;
  }
  getGroupIds() {
    const idsList = new List().asMutable();
    this.getGroups().forEach(group => idsList.push(group.get('id')));
    return idsList.asImmutable();
  }
}
