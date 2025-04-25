import React from 'react'

const Contact = () => {
  return (
    <section className='h-screen'>
      <div className='flex flex-col items-center font-medium'>
        <h1 className='text-2xl text-white'>Contact US</h1>

        <div className='my-16 w-96 '>
          <form action=""  className='flex flex-col items-center space-y-8'>
            <input
            className='w-full outline-none border-2 bg-transparent rounded-md p-2 text-white'
            type="text" name='name' placeholder='Enter Your Name' autoComplete='off' 
            />

            <input 
            className='w-full outline-none border-2 bg-transparent rounded-md text-white p-2'
            type="email" name='email' placeholder='Enter Your email' autoComplete='off'
             />


            <textarea 
            className='w-full outline-none border-2 bg-transparent rounded-md text-white  p-2'
            name="message" id="" cols="30" rows="10" placeholder='message'>

            </textarea>
            <button
            className='border-2 text-white bg-slate-700 py-2 px-8 rounded-xl w-full'
             type='submit'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact