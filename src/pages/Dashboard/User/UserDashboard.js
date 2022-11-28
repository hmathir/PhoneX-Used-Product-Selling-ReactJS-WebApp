import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/MainContext';

const UserDashboard = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return
    }
    if (user?.role === "seller") {
        return <Navigate to="/dashboard/my-products" />
    }
    if (user?.role === "buyer") {
        return <Navigate to='/dashboard/my-orders' />
    }
    if (user?.role === "admin") {
        return <Navigate to='/dashboard/sellers' />
    };

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default UserDashboard;