import { useState } from 'react'


function Dummy_helping_code2() {


    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [password2, setPassword2] = useState('')



    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })

    const { email, password } = formData


    const onSubmit = (e) => {
        e.preventDefault()
        console.log("submit meee");
    }
  
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
  
    // const { user, isLoading, isError, isSuccess, message } = useSelector(
    //   (state) => state.auth
    // )
  
    // useEffect(() => {
    //   if (isError) {
    //     toast.error(message)
    //   }
  
    //   if (isSuccess || user) {
    //     toast("Employee Registered Successfully")
    //     navigate('/adminHome')
    //   }
  
    //   dispatch(reset())
    // }, [user, isError, isSuccess, message, navigate, dispatch])
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  
    // const onSubmit = (e) => {
    //   e.preventDefault()
  
    //   if (password !== password2) {
    //     toast.error('Passwords do not match')
    //   } else {
    //     const userData = {
    //       name,
    //       email,
    //       password,
    //     }
  
    //     dispatch(register(userData))
    //   }
    // }
  
    // if (isLoading) {
    //   return <Spinner />
    // }

    return (
      <>
        <section className="heading">
        <h1></h1><h1> Employee login </h1>
        <p>Please login to your Account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          
            <div className="form-group">
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={onChange}/>
          </div>
          
          <div className="form-group">
            <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Add Password"
                onChange={onChange}/>
          </div>
          <div className="form-group">
            <button type = "submit" className="btn btn-block">Register</button>
          </div>
        </form>
      </section>
      </>
    )
  }
  
export default Dummy_helping_code2
  





// username salehsami017
// password Shena017
// connection mongodb+srv://salehsami017:Shena017@cluster0.e4tzz9w.mongodb.net/?retryWrites=true&w=majority
