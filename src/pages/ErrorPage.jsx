import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

  return (
    <div>
        {error.status}
        {error.error.message}
        <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default ErrorPage