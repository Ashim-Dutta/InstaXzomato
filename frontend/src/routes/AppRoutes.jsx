import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRegister from '../components/RegisterUser'
import UserLogin from '../components/LoginUser'
import FoodPartnerRegister from '../components/RegisterPartner'
import FoodPartnerLogin from '../components/LoginPartner'
import Home from '../pages/general/Home'
import CreateFood from '../pages/food-partner/CreateFoodPartner'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route
          path="/food-partner/register"
          element={<FoodPartnerRegister />}
        />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-food" element={<CreateFood/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes