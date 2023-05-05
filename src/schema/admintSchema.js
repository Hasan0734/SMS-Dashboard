const yup = require('yup');

const addStudentSchema = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  class: yup.string().required('Class is required!'),
  section: yup.string().required('Section is required!'),
  gender: yup.string().required('Gender is required!'),
  DOB: yup.string().required('Date of birth is required!'),
  roll: yup.number().required('Roll is required!'),
  admissionNo: yup.number().required('Admission No is required!'),
  religion: yup.string().required('Religion is required!'),
  email: yup.string().required('Email is Required!').email('Invalid Email'),
  studentPhoto: yup.string().required('Student Photo is Required'),
  fatherName: yup.string().required('Father name is required!'),
  motherName: yup.string().required('Mother name is required!'),
  fatherOccupation: yup.string().required('Father Occupation is required!'),
  motherOccupation: yup.string().required('Mother Occupation is required!'),
  phone: yup.string().required('Phone numbre is required!'),
  nationality: yup.string().required('Nationality is required!'),
  presentAddress: yup.string().required('Present Address is required!'),
  permanentAddress: yup.string().required('Permanent Address is required!'),
  parentPhoto: yup.mixed()
  .required('Parent Photo is Required')
//   .test('fileSize', "The file is too large", (value) => {return value && value[0].sienter <= 2000000})
//   .test('type', 'Oly the following formats are accepted: .jpeg, .jpg, .png', (value) => {
//     return value && (
//         value[0].type === 'image/jpeg' ||
//         value[0].type === 'image/jpg' ||
//         value[0].type === 'image/png' 
        
//     )
//   }),
});

const updateStudentSchema = yup.object().shape({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  class: yup.string().optional(),
  section: yup.string().optional(),
  gender: yup.string().optional(),
  DOB: yup.string().optional(),
  roll: yup.number().optional(),
  admissionNo: yup.number().optional(),
  religion: yup.string().optional(),
  email: yup.string().optional(),
  studenPhoto: yup.string().optional(),
  fatherName: yup.string().optional(),
  motherName: yup.string().optional(),
  fatherOccupation: yup.string().optional(),
  motherOccupation: yup.string().optional(),
  phone: yup.string().optional(),
  nationality: yup.string().optional(),
  presentAddress: yup.string().optional(),
  permanentAddress: yup.string().optional(),
  parentPhoto: yup.string().optional(),
});

module.exports = { addStudentSchema, updateStudentSchema };
