import { Map } from "immutable";
import StudentRecord from "./record";

export const rawStudentsDataAdapter = (rawGroupsData, variantsResultData) => {
  const parsedStudentsData = parseStudentsData(rawGroupsData);
  return parsedStudentsData.map((studentItem, studentId) =>
    studentItem
      .set('groups', collectStudentGroupsData(rawGroupsData, studentId))
      .set('variants', collectStudentVariantResult(variantsResultData, studentItem.userId))
  );
};
export const collectStudentVariantResult = (variantsResultData, userId) => {
  return Map(variantsResultData
    .filter(variantResult => userId === String(variantResult.get('userId')))
    .map(variantResult => [
      String(variantResult.get('variantId')),
      Map({
        id: String(variantResult.get('variantId')),
        num: String(variantResult.get('num')),
        testStatus: variantResult.get('testStatus'),
        result: variantResult.get('result'),
      }),
    ])
  )
};

export const collectStudentGroupsData = (rawGroupsData, studentId) => {
  return Map(
    rawGroupsData
      .filter(rawGroup =>
        rawGroup.student_profile_ids.includes(Number(studentId))
      )
      .map(groupData => [
        String(groupData.id),
        Map({
          id: String(groupData.id),
          name: String(groupData.name)
        })
      ])
  );
};

export const parseStudentsData = (rawGroupsData) => {
  return rawGroupsData.reduce((acc, currentGroup) => {
    const currentGroupStudents = Map(currentGroup.student_profiles.map(student => [
      String(student.id),
      new StudentRecord({
        id: String(student.id),
        userId: String(student.user.id),
        firstName: student.user.first_name,
        secondName: student.user.last_name,
        middleName: student.user.middle_name,
      })
    ]));
    return acc.merge(currentGroupStudents);
  }, Map());
}