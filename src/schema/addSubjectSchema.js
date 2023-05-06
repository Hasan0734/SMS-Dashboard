const yup = require('yup')

const addSubjectSchema = yup.object().shape({
  subjectName: yup.string().required('Subject Name is required!'),
  subjectType: yup.string().required('Subject type is required!'),
  class: yup.string().required('Class is required!'),
  subjectCode: yup.string().required('Subject code is required!'),
})

const updateSubjectSchema = yup.object().shape({
  subjectName: yup.string().optional(),
  subjectType: yup.string().optional(),
  class: yup.string().optional(),
  subjectCode: yup.string().optional(),
})

module.exports = {
  addSubjectSchema,
  updateSubjectSchema,
}
