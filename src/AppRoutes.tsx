import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./Pages/HomePage";
import AuthCallbackPage from "./Pages/AuthCallbackPage";
import UserProfilePage from "./Pages/UserProfilePage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ManageRestaurantPage from "./Pages/ManageRestaurantPage";
import SearchPage from "./Pages/SearchPage";
import DetailPage from "./Pages/DetailPage";
import OrderStatusPage from "./Pages/OrderStatusPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout showHero><HomePage /></Layout>} />
            <Route path='/auth-callback' element={<AuthCallbackPage />} />
            <Route path='/search/:city'
                element={
                    <Layout showHero={false}>
                        <SearchPage />
                    </Layout>}
            />
            <Route path='/details/:restaurantId'
                element={
                    <Layout showHero={false}>
                        <DetailPage />
                    </Layout>}
            />
            <Route element={<ProtectedRoute />}>
                <Route path='/user-profile' element={<Layout><UserProfilePage /></Layout>} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path='/manage-restaurant' element={<Layout><ManageRestaurantPage /></Layout>} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path='/order-status' element={<Layout><OrderStatusPage /></Layout>} />
            </Route>

            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes;