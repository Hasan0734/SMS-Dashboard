import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useLogoutQuery } from '../features/auth/authApi';
import Dashboard from './../components/dashboard/Dashboard';
import LinkedDeivces from './../components/linkedDevices/LinkedDeivces';
import { useDispatch } from 'react-redux';
import { sidebarToggled } from '../features/global/globalSlice';
import StudentList from '../components/StudentList/StudentList';
import StudentDetails from '../components/StudentDetails/StudentDetails';
import AdmintForm from '../components/AdmintForm/AdmintForm';
import StudentPromotion from '../components/StudentPromotion/StudentPromotion';
import TeacherList from '../components/TeacherList/TeacherList';
import TeacherDetails from '../components/TeacherDetails/TeacherDetails';
import AddTeacher from '../components/AddTeacher/AddTeacher';
import ParentsList from '../components/ParentsList/ParentsList';
import BookList from '../components/BookList/BookList';
import AddBook from '../components/AddBook/AddBook';
import StudentFeeList from '../components/StudentFeeList/StudentFeeList';
import CreateStudentPayment from '../components/CreateStudentPayment/CreateStudentPayment';
import ExpenseList from '../components/ExpenseList/ExpenseList';
import AddExpense from '../components/AddExpense/AddExpense';
import ClassList from '../components/ClassList/ClassList';
import AddNewClass from '../components/AddNewClass/AddNewClass';
import SubjectCard from '../components/SubjectCard/SubjectCard';
import ClassRoutine from '../components/ClassRoutine/ClassRoutine';
import ExamScheduleList from '../components/ExamScheduleList/ExamScheduleList';
import AddExamSchedule from '../components/AddExamSchedule/AddExamSchedule';
import ExamGardes from '../components/ExamGardes/ExamGardes';
import TransportList from '../components/TransportList/TransportList';
import AddTransport from '../components/AddTransport/AddTransport';
import HostelList from '../components/HostelList/HostelList';
import AddHostelRoom from '../components/AddHostelRoom/AddHostelRoom';
import Notice from '../components/Notice/Notice';
import Attendance from '../components/Attendance/Attendance';

const HomePage = () => {
  const search = useLocation().search;
  const dispatch = useDispatch();
  const component = new URLSearchParams(search).get('tab');

  //Logout
  const { refetch } = useLogoutQuery(undefined, {
    skip: Boolean(component !== 'logout'),
  });

  React.useEffect(() => {
    if (component === 'logout') {
      refetch()
    }
  }, [component, refetch]);

  const renderSection = (params) => {
    switch (params) {
      case 'dashboard':
        dispatch(sidebarToggled())
        return <Dashboard />
      case 'all_students':
        dispatch(sidebarToggled())
        return <StudentList />
      case 'student_details':
        dispatch(sidebarToggled())
        return <StudentDetails />
      case 'admint_form':
        dispatch(sidebarToggled())
        return <AdmintForm />
      case 'student_promotion':
        dispatch(sidebarToggled())
        return <StudentPromotion/>
      case 'all_teachers':
        dispatch(sidebarToggled())
        return <TeacherList />
      case 'teacher_details':
        dispatch(sidebarToggled())
        return <TeacherDetails />
      case 'add_teacher':
        dispatch(sidebarToggled())
        return <AddTeacher />
      case 'parents':
        dispatch(sidebarToggled())
        return <ParentsList />
      case 'all_books':
        dispatch(sidebarToggled())
        return <BookList />
      case 'add_book':
        dispatch(sidebarToggled())
        return <AddBook />
      case 'fees_collection':
        dispatch(sidebarToggled())
        return <StudentFeeList />
      case 'create_student_payment':
        dispatch(sidebarToggled())
        return <CreateStudentPayment />
      case 'all_expenses':
        dispatch(sidebarToggled())
        return <ExpenseList />
      case 'add_expenses':
        dispatch(sidebarToggled())
        return <AddExpense />
      case 'all_class':
        dispatch(sidebarToggled())
        return <ClassList />
      case 'add_new_class':
        dispatch(sidebarToggled())
        return <AddNewClass />
      case 'subject':
        dispatch(sidebarToggled())
        return <SubjectCard />
      case 'class_routine':
        dispatch(sidebarToggled())
        return <ClassRoutine />
      case 'attendance':
        dispatch(sidebarToggled())
        return <Attendance />
      case 'exam_schedule':
        dispatch(sidebarToggled())
        return <ExamScheduleList />
      case 'add_exam_schedule':
        dispatch(sidebarToggled())
        return <AddExamSchedule />
      case 'exam_grades':
        dispatch(sidebarToggled())
        return <ExamGardes />
      case 'all_transport':
        dispatch(sidebarToggled())
        return <TransportList />
      case 'add_transport':
        dispatch(sidebarToggled())
        return <AddTransport />
      case 'hostel_rooms':
        dispatch(sidebarToggled())
        return <HostelList />
      case 'add_hostel_rooms':
        dispatch(sidebarToggled())
        return <AddHostelRoom />
      case 'notice':
        dispatch(sidebarToggled())
        return <Notice />

      case 'linked_devices':
        dispatch(sidebarToggled())
        return <LinkedDeivces />
      default:
        return <Dashboard />
    }
  };

  return <Layout>{renderSection(component)}</Layout>
}

export default HomePage
