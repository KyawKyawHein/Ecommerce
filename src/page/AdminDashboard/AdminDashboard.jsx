import React, { useEffect, useState } from 'react'
import { Loader } from '../../components';
import DashboardLayout from '../../layout/DashboardLayout';

const AdminDashboard = () => {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
      }, []);
  return loading? (
    <Loader/>
  ): (
    <DashboardLayout>
        <h1>hello</h1>
    </DashboardLayout>
  )
}

export default AdminDashboard
