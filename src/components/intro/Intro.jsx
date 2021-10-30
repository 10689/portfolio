import './intro.css'
import blob from '../../svg/blob.svg'

import html from '../../svg/html.svg'
import css from '../../svg/css.svg'
import javascript from '../../svg/javascript.svg'

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Javeed Ahmed</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>UI Developer</div>
            </div>
          </div>
          <p className='i-desc'>
            Strong knowledge with hand-coded
            <b> HTML5, CSS3, JavaScript & React Framework. </b>Proficient in UI design tool <b>Figma, Adobe Illustrator. </b>
          </p>
        </div>
        <div></div>
      
{/* <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-mouse-multimedia-kiranshastry-gradient-kiranshastry.png"/> */}

      </div>
      <div className='i-right'>
        <div className='i-bg'>
          <img src={blob} alt='' className='i-img' />
        </div>

        {/* // circular */}
        <div id='parent'>
          <div id='child-1'>
            <img src={javascript} alt='' />
          </div>
          <div id='child-2'>
            <img src={css} alt='' />
          </div>
          <div id='child-3'>
            <img src={html} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
