const yup = require('yup');

const addGradeSchema = yup.object().shape({
  gradeName: yup.string().required('Grade name is required!'),
  gradePoint: yup.string().required('Grade point is required!'),
  percentageFrom: yup.string().required('Percentage from is required!'),
  percentageUpto: yup.string().required('Percentage upto is required!'),
  comments: yup.string().optional(),
});

const updateGradeSchema = yup.object().shape({
  gradeName: yup.string().optional(),
  gradePoint: yup.string().optional(),
  percentageFrom: yup.string().optional(),
  percentageUpto: yup.string().optional(),
  comments: yup.string().optional(),
});

module.exports = { addGradeSchema, updateGradeSchema };
