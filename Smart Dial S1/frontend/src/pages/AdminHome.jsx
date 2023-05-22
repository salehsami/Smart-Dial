import { Link } from 'react-router-dom'; // Import Link from React Router

function AdminHome() {
    return (
            <div className="container">
                <div className='heading'>
                    <h1>Welcome to Admin Portal</h1>
            </div>
            <Link to="/registerEmp" className="btn ">Register Employee</Link>
            <Link to="/" className="btn ">button not working</Link>
            <Link to="/" className="btn ">button not working</Link>
            </div>
  )
}

export default AdminHome