import React from 'react'

const NewsletterBox = () => {
       
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
  <div className="text-center">
  <p className="text-2xl font-semibold text-gray-900">
    Subscribe now & get 20% off
  </p>
  <p className="text-gray-500 mt-3">
    Be the first to know about new arrivals, exclusive offers, and updates.
  </p>

  <form
    onSubmit={onSubmitHandler}
    className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-full shadow-sm pl-4 focus-within:border-black transition-all duration-300"
  >
    <input
      className="w-full sm:flex-1 outline-none text-sm placeholder-gray-400 bg-transparent"
      type="email"
      placeholder="Enter your email"
      required
    />
    <button
      type="submit"
      className="bg-black text-white text-xs font-semibold px-10 py-4 rounded-full tracking-wide shadow-md hover:bg-gray-900 hover:shadow-lg transition-all duration-300"
    >
      SUBSCRIBE
    </button>
  </form>
</div>

  )
}

export default NewsletterBox
