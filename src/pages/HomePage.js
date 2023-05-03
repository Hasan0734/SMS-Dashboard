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
import AdmintForm from '../components/AdmintForm/AdminForm';
import StudentPromotion from '../components/StudentPromotion/StudentPromotion';
import TeacherList from '../components/TeacherList/TeacherList';
import TeacherDetails from '../components/TeacherDetails/TeacherDetails';
import AddTeacher from '../components/AddTeacher/AddTeacher';
import ParentsList from '../components/ParentsList/ParentsList';
import BookList from '../components/BookList/BookList';

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
