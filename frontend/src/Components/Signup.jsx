import {Link } from 'react-router-dom'
import Login from './Login'
import {useForm}  from 'react-hook-form'

function Signup (){

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

    return(
        <>
        <div className='flex h-screen justify-center items-center '>

        <div className="w-[600px]">
  <div className="modal-box ">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link  to ="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Sign Up</h3>
 
     <div className="mt-4 space-y-2">
         <span>Username</span><br></br>
         <input type="name" placeholder="Enter Your Name" className="w-80 px-3 border rounded-md outline-none py-1" {...register("name", { required: true })}></input><br></br>
         {errors.name && <span className="text-sm text-red-500">Name is required !</span>}

     </div>

     <div className="mt-4 space-y-2">
          <span>Email</span><br></br>
         <input type="email" placeholder="Enter Your Email" className="w-80 px-3 border rounded-md outline-none py-1" {...register("email", { required: true })}></input><br></br>
         {errors.email && <span className="text-sm text-red-500">Email is required !</span>}

      </div>

      <div className="mt-4 space-y-2">
          <span>Password</span><br></br>
          <input type="password" placeholder="Enter Your password" className="w-80 px-3 border rounded-md outline-none py-1" {...register("password", { required: true })}></input><br></br>
          {errors.password && <span className="text-sm text-red-500">Password is required !</span>}

       </div>
      
      <div className="flex justify-around mt-4">
        <button className="bg-pink-500 text-white rounded py-1 px-3 hover:bg-pink-700 duration-200">Sign Up</button>
        <p>Have Account ?
           <button to="/"
            className="underline text-blue-500 cursor-pointer"
            onClick={()=>
                document.getElementById("my_modal_3").showModal()
            }> 
            Log In
            </button>
            <Login/>
            </p>
      </div>
      </form>

   </div>
</div>
        </div>
        </>
    )
}

export default Signup