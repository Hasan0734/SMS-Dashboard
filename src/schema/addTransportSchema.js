const yup = require('yup');

const addTransportSchema = yup.object().shape({
  routeName: yup.string().required('Route name is required!'),
  vechileNumber: yup.string().required('Vechile number is required!'),
  driverName: yup.string().required('Driver name is required!'),
  licenseNumber: yup.string().required('License number is required!'),
  phone: yup.string().required('Phone is required!'),
});

const updateTransportSchema = yup.object().shape({
  routeName: yup.string().optional(),
  vechileNumber: yup.string().optional(),
  driverName: yup.string().optional(),
  licenseNumber: yup.string().optional(),
  phone: yup.string().optional(),
});

module.exports = { addTransportSchema, updateTransportSchema };
