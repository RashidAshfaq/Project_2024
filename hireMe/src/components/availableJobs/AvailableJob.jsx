import './availableJob.css';

const AvailableJob = () => {
  return (
    <>
     <div className='searchInput'>
     <input type='text' placeholder='Search' />
          <button>Search</button>
     </div>
     
     <div className='jobPortion'>
        <h2>Apply For Job</h2>
        <div className='jobCard'>
            <img/>
            <div className='jobContent'>
                <p className='title'>Web Programming Faculty</p>
                 <p className='date'>Jan 20, 2023 - March 20, 2023</p>
                 <p className='jobDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus illo rerum fugit enim vitae! Earum.</p>
            </div>
            <button>Apply</button>
        </div>
        <div className='jobCard'>
            <img/>
            <div className='jobContent'>
                <p className='title'>Visiting Teacher Required</p>
                 <p className='date'>Jan 20, 2023 - March 20, 2023</p>
                 <p className='jobDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus illo rerum fugit enim vitae! Earum.</p>
            </div>
            <button>Apply</button>
        </div>
        <div className='jobCard'>
            <img/>
            <div className='jobContent'>
                <p className='title'>OOP Visiting Teacher</p>
                 <p className='date'>Jan 20, 2023 - March 20, 2023</p>
                 <p className='jobDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus illo rerum fugit enim vitae! Earum.</p>
            </div>
            <button>Apply</button>
        </div>
     </div>
     
     <div className='countPage'>
       <p className='number'>1</p>
       <p  className='number'>2</p>
       <p  className='number'>3</p>
     </div>
    </>
  )
}

export default AvailableJob