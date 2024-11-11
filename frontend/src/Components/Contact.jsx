import {Link} from 'react-router-dom'

function Contact(){
    return(
        <>
    <Link className="bg-pink-600 text-white hover:bg-pink-400 px-3 py-2  rounded-md "  to="/">Back to Home</Link>          
<div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm space-y-4 mt-20">
  <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>

  <label className="block text-sm font-medium text-gray-700">
    Name
    <input
      type="text"
      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Daisy"
    />
  </label>

  <label className="block text-sm font-medium text-gray-700">
    Email
    <input
      type="email"
      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="daisy@site.com"
    />
  </label>

  <label className="block text-sm font-medium text-gray-700">
    Message
    <textarea
      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Type Your Message"
      rows="4"
    ></textarea>
  </label>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
  >
    Send Message
  </button>
</div>

        </>
    )
}

export default Contact