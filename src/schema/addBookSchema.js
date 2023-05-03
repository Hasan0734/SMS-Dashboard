const yup = require('yup');

const addBookSchema = yup.object().shape({
  bookName: yup.string().required('Book name is required!'),
  subject: yup.string().required('Subject is required!'),
  writerName: yup.string().required('Writer name is required!'),
  class: yup.string().required('Class is required!'),
  publishDate: yup.string().required('Publishing date is required!'),
  uploadDate: yup.string().required('Upload date is required!'),
  IDNo: yup.number().required('ID no is required!'), 
  photo: yup.mixed().required('Cover Photo is Required'),
  //   .test('fileSize', "The file is too large", (value) => {return value && value[0].sienter <= 2000000})
  //   .test('type', 'Oly the following formats are accepted: .jpeg, .jpg, .png', (value) => {
  //     return value && (
  //         value[0].type === 'image/jpeg' ||
  //         value[0].type === 'image/jpg' ||
  //         value[0].type === 'image/png'

  //     )
  //   }),
});

const updateBookSchema = yup.object().shape({
  bookName: yup.string().optional(),
  subject: yup.string().optional(),
  writerName: yup.string().optional(),
  class: yup.string().optional(),
  publishDate: yup.string().optional(),
  uploadDate: yup.string().optional(),
  IDNo: yup.number().optional(), 
  photo: yup.string().optional(),
});

module.exports = { addBookSchema, updateBookSchema };
