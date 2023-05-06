const yup = require('yup');

const addClassSchema = yup.object().shape({
  teacherName: yup.string().required('Teacher name is required!'),
  ID: yup.string().required('ID is required!'),
  class: yup.string().required('Class is required!'),
  section: yup.string().required('Section is required!'),
  gender: yup.string().required('Gender is required!'),
  subject: yup.string().required('Subject is required!'),
  startTime: yup.string().required('Start Time is required!'),
  endTime: yup.string().required('End Time is required!'),
  date: yup.string().required('Date is required!'),
  email: yup.string().required('Email is Required!').email('Invalid Email'),
  phone: yup.string().required('Phone numbre is required!'),
});

const updateClassSchema = yup.object().shape({
  teacherName: yup.string().optional(),
  ID: yup.string().optional(),
  class: yup.string().optional(),
  section: yup.string().optional(),
  gender: yup.string().optional(),
  subject: yup.string().optional(),
  time: yup.string().optional(),
  date: yup.string().optional(),
  email: yup.string().optional(),
  phone: yup.string().optional(),
});

module.exports = { addClassSchema, updateClassSchema };
