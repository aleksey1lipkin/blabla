import { List, Map } from 'immutable';

import {
  rawStudentsDataAdapter,
  parseStudentsData,
  collectStudentGroupsData,
  collectStudentVariantResult
} from '..';
import StudentRecord from '../record';


describe('rawStudentData adapter', () => {
  it('should return correct data structure', () => {
    const mockedGroupsData = [
      {
        'school_id': 1,
        'name': 'Тестовая группа врачей-терапевтов',
        'is_selfchosen': false,
        'teacher_id': 4,
        'is_variant': false,
        'student_profiles': [
          {
            'user': {
              'sex': null,
              'id': 5610741,
              'middle_name': 'первак',
              'first_name': '001',
              'last_name': 'Студент',
              'email': 'student001@example.com',
              'date_of_birth': null,
            },
            'enlisted_on': null,
            'id': 3946404,
            'left_on': null,
          },
        ],
        'subject': {
          'name': 'Врач-терапевт',
          'id': 14739,
        },
        'student_profile_ids': [
          3946404,
        ],
        'union_id': null,
        'id': 251979,
        'union_type': null,
        'type': '',
        'subject_id': 14739,
      },
    ];
    const mockedVariantResultData = List([
      Map({
        createdAt: 1562568155834,
        ejdResult: Map(),
        num: 1,
        result: 100,
        testStatus: 'finished',
        userId: 5610741,
        variantId: 4232341,
      }),
    ]);

    const result = Map({
      3946404: new StudentRecord({
        id: '3946404',
        userId: '5610741',
        firstName: '001',
        secondName: 'Студент',
        middleName: 'первак',
        groups: Map({
          '251979': Map({
            id: '251979',
            name: 'Тестовая группа врачей-терапевтов',
          }),
        }),
        variants: Map({
          '4232341': Map({
            id: '4232341',
            num: '1',
            result: 100,
            testStatus: 'finished',
          }),
        }),
      }),
    });
    expect(rawStudentsDataAdapter(mockedGroupsData, mockedVariantResultData)).toEqual(result);
  });
});

describe('collect students data test', () => {
  let mockedGroupsData;
  beforeEach(() => {
    mockedGroupsData = [
      {
        'student_profiles': [
          {
            'user': {
              'sex': null,
              'id': 5610741,
              'middle_name': 'студент1',
              'first_name': 'студент1',
              'last_name': 'студент1',
              'email': 'student001@example.com',
              'date_of_birth': null,
            },
            'enlisted_on': null,
            'id': 3946404,
            'left_on': null,
          },
        ],
        'id': 251979,
        'student_profile_ids': [
          3946404,
        ],
        'name': 'группа1',
      },
      {
        'student_profiles': [
          {
            'user': {
              'sex': null,
              'id': 5610741,
              'middle_name': 'студент1',
              'first_name': 'студент1',
              'last_name': 'студент1',
              'email': 'student001@example.com',
              'date_of_birth': null,
            },
            'enlisted_on': null,
            'id': 3946404,
            'left_on': null,
          },
        ],
        'id': 123456,
        'student_profile_ids': [
          3946404,
        ],
        'name': 'группа2',
      },
      {
        'student_profiles': [
          {
            'user': {
              'sex': null,
              'id': 234567,
              'middle_name': 'студент2',
              'first_name': 'студент2',
              'last_name': 'студент2',
              'email': 'student001@example.com',
              'date_of_birth': null,
            },
            'enlisted_on': null,
            'id': 345678,
            'left_on': null,
          },
        ],
        'student_profile_ids': [
          3946404,
        ],
        'name': 'группа3',
        'id': 654321,
      },
    ];
  });
  describe('parse students data tests', () => {
    it('should not create duplicated entities', () => {
      const result = Map({
        '3946404': new StudentRecord({
          id: '3946404',
          userId: '5610741',
          firstName: 'студент1',
          secondName: 'студент1',
          middleName: 'студент1',
        }),
        '345678': new StudentRecord({
          id: '345678',
          userId: '234567',
          firstName: 'студент2',
          secondName: 'студент2',
          middleName: 'студент2',
        }),
      });
      expect(parseStudentsData(mockedGroupsData)).toEqual(result);
    });
  });

  describe('collect students groups data', () => {
    it('should return correct data', () => {
      const result = Map({
        '251979': Map({
          id: '251979',
          name: 'группа1',
        }),
        '123456': Map({
          id: '123456',
          name: 'группа2',
        }),
        '654321': Map({
          id: '654321',
          name: 'группа3',
        }),
      });
      expect(collectStudentGroupsData(mockedGroupsData, '3946404')).toEqual(result);
    })
  })
})

describe('collectStudentVariantResult tests', () => {
  it('should return correct data', () => {
    const mockedVariantResultData = List([
      Map({
        createdAt: 1562568155834,
        ejdResult: Map(),
        num: 1,
        result: 100,
        testStatus: 'finished',
        userId: 5610741,
        variantId: 4232341,
      }),
    ]);
    const result = Map({
      '4232341': Map({
        id: '4232341',
        num: '1',
        testStatus: 'finished',
        result: 100,
      })
    })
    expect(collectStudentVariantResult(mockedVariantResultData, '5610741')).toEqual(result);
  });
  it('should return empty map if variant results does not provided', () => {
    const result = Map();
    expect(collectStudentVariantResult(List(), '5610741')).toEqual(result);
  })
})