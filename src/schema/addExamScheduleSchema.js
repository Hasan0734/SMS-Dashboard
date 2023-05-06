const yup = require('yup');

const addExamScheduleSchema = yup.object().shape({
  examName: yup.string().required('Exam name is required!'),
  subjectType: yup.string().required('Subject type is required!'),
  class: yup.string().required('Class is required!'),
  section: yup.string().required('Section is required!'),
  time: yup.string().required('Time is required!'),
  date: yup.string().required('Date is required!'),
});

const updateExamScheduleSchema = yup.object().shape({
  examName: yup.string().optional(),
  subjectType: yup.string().optional(),
  class: yup.string().optional(),
  section: yup.string().optional(),
  time: yup.string().optional(),
  date: yup.string().optional(),
});

module.exports = { addExamScheduleSchema, updateExamScheduleSchema };
