import Cards from "./Cards"
import lists from '../../public/list.json'
import { Link } from 'react-router-dom'
function Course(){
    console.log(lists);

    return(
        <>

        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center ">
                <h1 className="  font-semibold md:text-4xl">We Are Delighted to have you<span className="text-pink-500"> Here :)</span></h1>
                    <p  className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet 
                         ea ad nam autem doloremquehic quis aperiam culpa sapiente pariatur,
                         ratione exercitationem eaque labore, laboriosam sequi possimus neque repellendus.
                    </p>
                     <Link to="/">
                     <button className=" mt-6 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 duration-300">Back</button>

                     </Link>
            </div> 
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {
                  lists.map((item)=>(
                    <Cards item={item} key={item.id}/>
                  ))
                }

            </div>
                  
        </div>
        </>
    )
}

export default Course