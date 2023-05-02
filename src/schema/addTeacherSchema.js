const yup = require('yup');

const addTeacherSchema = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  class: yup.string().required('Class is required!'),
  section: yup.string().required('Section is required!'),
  gender: yup.string().required('Gender is required!'),
  DOB: yup.string().required('Date of birth is required!'),
  id: yup.number().required('Roll is required!'), 
  religion: yup.string().required('Religion is required!'),
  subject: yup.string().required('Subject is required!'),
  email: yup.string().required('Email is Required!').email('Invalid Email'),
  phone: yup.string().required('Phone numbre is required!'),
  address: yup.number().required('Permanent Address is required!'),
  photo: yup.mixed().required('Parent Photo is Required'),
  //   .test('fileSize', "The file is too large", (value) => {return value && value[0].sienter <= 2000000})
  //   .test('type', 'Oly the following formats are accepted: .jpeg, .jpg, .png', (value) => {
  //     return value && (
  //         value[0].type === 'image/jpeg' ||
  //         value[0].type === 'image/jpg' ||
  //         value[0].type === 'image/png'

  //     )
  //   }),
});

const updateTeacherSchema = yup.object().shape({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  class: yup.string().optional(),
  section: yup.string().optional(),
  gender: yup.string().optional(),
  DOB: yup.string().optional(),
  id: yup.number().optional(), 
  religion: yup.string().optional(),
  subject: yup.string().optional(),
  email: yup.string().optional(),
  phone: yup.string().optional(),
  address: yup.number().optional(),
  photo: yup.mixed().optional(),
});

module.exports = { addTeacherSchema, updateTeacherSchema };
