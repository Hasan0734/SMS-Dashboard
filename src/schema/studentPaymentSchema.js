const yup = require('yup');

const studentPaymentSchema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  ID: yup.string().required('ID is required!'),
  class: yup.string().required('Class is required!'),
  section: yup.string().required('Section is required!'),
  totalFee: yup.string().required('Total Fee is required!'),
  payMethod: yup.string().required('Payment Method is required!'), 
  status: yup.string().required('Status is required!'), 
  payDate: yup.string().required('Payment Date is required!'), 

});

const updateStudentPymentSchema = yup.object().shape({
    name: yup.string().optional(),
    ID: yup.string().optional(),
    class: yup.string().optional(),
    section: yup.string().optional(),
    totalFee: yup.string().optional(),
    payMethod: yup.string().optional(),
    status: yup.string().optional(), 
    payDate: yup.string().optional(),
});

module.exports = { studentPaymentSchema, updateStudentPymentSchema };
