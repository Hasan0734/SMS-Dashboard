const yup = require('yup');

const addExpenseSchema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  ID: yup.string().required('ID is required!'),
  expenseType: yup.string().required('Expense Type is required!'),
  amount: yup.string().required('Amount is required!'),
  phone: yup.string().required('Phone is required!'),
  email: yup.string().required('Email is required!'), 
  status: yup.string().required('Status is required!'), 
  expenseDate: yup.string().required('Expense Date is required!').email('Invalid Email'), 

});

const updateExpenseSchema = yup.object().shape({
    name: yup.string().optional(),
    ID: yup.string().optional(),
    expenseType: yup.string().optional(),
    amount: yup.string().optional(),
    phone: yup.string().optional(),
    email: yup.string().optional().email('Invalid Email'),
    status: yup.string().optional(), 
    expenseDate: yup.string().optional(),
});

module.exports = { addExpenseSchema, updateExpenseSchema };

