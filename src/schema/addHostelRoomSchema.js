const yup = require('yup');

const addHostelRoomSchema = yup.object().shape({
  hostelName: yup.string().required('Hostel name is required!'),
  roomNumber: yup.string().required('Room number is required!'),
  roomType: yup.string().required('Room type is required!'),
  totalBed: yup.number().required('Number of Bed is required!'),
  costPerBed: yup.number().required('Cost per bed is required!'),
});

const updateHostelRoomSchema = yup.object().shape({
  hostelName: yup.string().optional(),
  roomNumber: yup.string().optional(),
  roomType: yup.string().optional(),
  totalBed: yup.number().optional(),
  costPerBed: yup.number().optional(),
});

module.exports = { addHostelRoomSchema, updateHostelRoomSchema };
