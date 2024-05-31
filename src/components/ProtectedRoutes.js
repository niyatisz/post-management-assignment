import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const {Component} = props
  const navigate =  useNavigate();


  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []); 
  return (
    <div>
      <Component/>
    </div>
  )
}

export default ProtectedRoute