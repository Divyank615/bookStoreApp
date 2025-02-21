import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'

function  Login(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


    return(
        <>
        <div>
           {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Login</h3>
     <div className="mt-4 space-y-2">

      <span>Email</span><br></br>
      <input type="email" placeholder="Enter Your Email" className="w-80 px-3 border rounded-md outline-none py-1" {...register("email", { required: true })}/><br></br>
      {errors.email && <span className="text-sm text-red-500">This field is required !</span>}

      </div>

      <div className="mt-4 space-y-2">

      <span>Password</span><br></br>
      <input type="password" placeholder="Enter Your password" className="w-80 px-3 border rounded-md outline-none py-1" {...register("password", { required: true })}/><br></br>
      {errors.password && <span className="text-sm text-red-500">This field is required !</span>}

      </div>  
      
      <div className="flex justify-around mt-4">
        <button className="bg-pink-500 text-white rounded py-1 px-3 hover:bg-pink-700 duration-200">Login</button>
        <p>Not registered?
           <Link to="/signup"
            className="underline text-blue-500 cursor-pointer"> 
            Sign Up
            </Link>
            </p>
      </div>
      </form>
   </div>
</dialog>
        </div>
        </>
    )
}
export default Login