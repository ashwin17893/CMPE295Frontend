import React, { Component } from 'react';
import { Button} from 'reactstrap';
import history from "./history";

class Terms  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkbox:false,
            checkbox1:false,
            checkbox2:false,
        };

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
    }

    toggle(){
        if(this.state.checkbox===false){
            this.setState({checkbox:true})
        }
        else{
            this.setState({checkbox:false})
        }
    }

    toggle1(){
        if(this.state.checkbox1===false){
            this.setState({checkbox1:true})
        }
        else{
            this.setState({checkbox1:false})
        }
    }

    toggle2(){
        if(this.state.checkbox2===false){
            this.setState({checkbox2:true})
        }
        else{
            this.setState({checkbox2:false})
        }
    }
    render() {
        return (
            <div>
                <div className="bgImg">
                </div>
                <div className="TOScardoutline">
                    <p className="TOSTitle"> Terms and Services</p>
                    <p className="TOSdisclaimer">By using Zenful, you agree and acknowledge that:<br/><br/>
                        The information contained on Zenful is for general information purposes  only, and is not intended as specific medical advice for any individual.<br/>
                        Zenful is not a substitute for seeking professional care for the diagnosis and treatment of any mental/psychiatric disorders.<br/>
                        Zenful shall not be liable whatsoever for any damages incurred as a result of its use.<br/>
                        If you are a suicidal, please call the National Suicide Prevention Lifeline <a href="/TermsandService">1-800-273-8255</a>
                    </p>
                    <p className="TOS-age">I am 18 years or older</p>
                    <p className="TOS-link">I have read full <a href="/HomeSettingsTOS" target="_blank"> Terms and Service</a> and accept.</p>
                    <p className="TOS-PP-link">I have read and accept the <a href="/HomeSettingsPP" target="_blank"> privacy policy</a> and agree to the <br/> processing of this sensitive personal data</p>
                    <img className="TOS-personal-checked1"  src={this.state.checkbox === true? require('../images/ic_checkmark-2x.png'):require('../images/ic_checkmark_1-2x.png')} alt="Zenful Inc. App"
                         onClick={this.toggle}/>
                    <img className="TOS-personal-unchecked" src={this.state.checkbox1 === true? require('../images/ic_checkmark-2x.png'):require('../images/ic_checkmark_1-2x.png')}  onClick={this.toggle1} alt="Zenful Inc. App"/>

                    <img className="TOS-personal-checked"  src={this.state.checkbox2 === true? require('../images/ic_checkmark-2x.png'):require('../images/ic_checkmark_1-2x.png')} alt="Zenful Inc. App"
                         onClick={this.toggle2}/>

                    <Button className="TOSAccept-btn" outline color="primary" disabled={!(this.state.checkbox && this.state.checkbox1 && this.state.checkbox2)}onClick={() => {
                        return this._createLink();
                    }}>Accept</Button>
                </div>

            </div>
        );
    }
}
export default Terms;