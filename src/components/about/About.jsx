import './about.css'
// import award1 from '../../img/uc-1.jpg'
// import award2 from '../../img/uc-2.jpg'
import Developer from '../../svg/Developer.svg'

const About = () => {

  

  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Developer} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>Web developer and Graphic Designer</p>
        <p className='a-desc'>My <b>Goal</b> to be come full time web developer. 
            </p>
        <div className='a-award'>
          {/* <img src={award1} alt='' className='a-award-img' />
          <img src={award2} alt='' className='a-award-img' /> */}
          <div className='a-award-texts'>
            <h4 className='a-award-title'>Udemy Certificate of Comepletion</h4>
            <p className='a-award-desc'>
            <b> JavaScript : 
Modern JavaScript </b>(Intructors  Brad Traversy)

            </p>
            
             <p className='a-award-desc'>
              <b>Git a Web Developer (HTML, CSS, JavaScript) </b>: Mastering the Morder Workflow
Brad Schiff (Intructor Brad Schiff)

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
