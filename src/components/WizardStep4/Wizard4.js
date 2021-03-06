import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../reset.css'
import './Wizard4.css';
import Nav from '../Nav/Nav';

class Wizard4 extends Component {
    render() {
      return (
        <div>
            <Nav/>
            <section className='wizard4-main-content'>
                <div className='wizard4-main-content-container'>
                    <div className='wizard4-line1-container'>
                        <div className='wizard4-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard4-cancel-button'>Cancel</Link>
                    </div>
                    <div className='wizard4-plain-text-format'>Step 4</div>
                    <div className='wizard4-step-images-container'>
                        <img src={require('../../assets/step_completed.png')} alt="step one completed"></img>
                        <img src={require('../../assets/step_completed.png')} alt="step two completed"></img>
                        <img src={require('../../assets/step_completed.png')} alt="step three completed"></img>
                        <img src={require('../../assets/step_active.png')} alt="step four active"></img>
                        <img src={require('../../assets/step_inactive.png')} alt="step five inactive"></img>
                    </div>
                    <div className='wizard4-input-container'>
                        <div className='wizard4-bold-text-format'>Loan Amount</div>
                        <input className='wizard4-input1'></input>
                        <div className='wizard4-bold-text-format'>Monthly Mortgage</div>
                        <input className='wizard4-input2'></input>
                    </div>
                    <div className='wizard4-button-container'>
                        <Link to='/wizard3' className='wizard4-nextstep-button'>Previous Step</Link>
                        <Link to='/wizard5' className='wizard4-nextstep-button'>Next Step</Link>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }

  export default Wizard4;
