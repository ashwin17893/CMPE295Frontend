import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import history from "./history";
import ItemsCarousel from 'react-items-carousel';
import '../App.css';




class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: {
                items: [
                    {
                        imgSrc: require("../images/beard-blur-casual-462680.jpg"),
                        name: "Niklas",
                        des: "19 February 1473 – 24 May 1543",
                        day:"Today",
                        date:7,
                        type:"Appointment",
                        time:"11:00 AM to 12:00 PM"
                    },
                    {
                        imgSrc: require("../images/Pasted_image_at_2018-09-12__6_20_PM.png"),
                        // name: "Yoga outside student center",
                        des: "15 February 1564 – 8 January 1642",
                        day:"Tommorrow",
                        date:8,
                        type:"workshop",
                        time:"1:00 PM to 2:00 PM"
                    },
                    {
                        imgSrc: require("../images/Profile_dummy.jpg"),
                        name: "Michael",
                        des: "22 September 1791 – 25 August 1867",
                        day:"Next Day",
                        date:9,
                        type:"Appointment",
                        time:"3:00 PM to 4:30 PM"
                    }
                ]
            }

        };
    }



    changeActiveItem1 = (activeItemIndex1) => this.setState({ activeItemIndex1 });
    render() {
        let schedule = this.state.schedule.items.map((item, index) =>
            <div style={{marginTop:"2%", height:240, width: 345 }} key = {index}>
                <div style={{height:228, width: 345, borderTopLeftRadius:"3%",  borderTopRightRadius:"3%" ,boxShadow:"0px 0px 5px 0px rgba(0, 0, 0, 0.25)" }}>
                    <img  style={{height:"68.33%", width: "100%", borderTopLeftRadius:"3%", borderTopRightRadius:"3%"}} src = {item.imgSrc} alt="Zenful Inc. App"/>
                    <p style={{ position:"absolute", height:"4.17%", width: "80%", top:170,  fontFamily: 'Open Sans', fontSize: 12, textAlign:"left", marginLeft:10, fontWeight:600}}>{item.name}</p>
                    <p style={{ position:"absolute",height:20, width: 20, marginLeft:"40%", top:200}} alt="Zenful Inc. App">...</p>
                    {(() => {

                        if(item.type==="Appointment"){
                            return(
                                <div>
                                    <div style={{position:"absolute", height:74, width: 345, top:161, borderBottomLeftRadius:"3%",  borderBottomRightRadius:"3%", borderTop:"none", border:"2px solid rgba(245, 166, 35, 1)",boxShadow:"0px 0px 5px 0px rgba(0, 0, 0, 0.25)" }}/>
                                    <div style={{ position:"absolute",height:70, width: 80, top:163, backgroundColor:"rgba(245, 166, 35, 1)"}} alt="Zenful Inc. App"/>
                                    <p style={{ position:"absolute", height:"4.17%", width: "80%", top:170,  fontFamily: 'Open Sans', fontSize: 12, textAlign:"left", marginLeft:90, fontWeight:600}}>{"Appointment with "+item.name}</p>
                                </div>
                            );
                        }
                        else if(item.type==="workshop"){
                            return(
                                <div>
                                    <div style={{position:"absolute", height:74, width: 345, top:161, borderBottomLeftRadius:"3%",  borderBottomRightRadius:"3%", borderTop:"none", border:"2px solid rgba(237, 30, 111, 1)",boxShadow:"0px 0px 5px 0px rgba(0, 0, 0, 0.25)"}}/>
                                    <div style={{ position:"absolute",height:70, width: 80, top:163, backgroundColor:"rgba(237, 30, 111, 1)"}} alt="Zenful Inc. App"/>
                                    <p style={{ position:"absolute", height:"4.17%", width: "80%", top:170,  fontFamily: 'Open Sans', fontSize: 12, textAlign:"left", marginLeft:90, fontWeight:600}}>Yoga Outside Student Centre</p>
                                </div>
                            );
                        }
                    })()}
                    <p style={{ position:"absolute", height:"4.17%", width: "80%", top:170,  fontFamily: 'Open Sans', fontSize: 10, textAlign:"left", marginLeft:9, fontWeight:600,color: "white"}}>{item.day}</p>
                    <p style={{ position:"absolute", height:"9%", width: "80%", top:172,  fontFamily: 'Open Sans', fontSize: 40, textAlign:"left", marginLeft:25, fontWeight:600,color: "white"}}>{item.date}</p>
                    <p style={{ position:"absolute", height:"4.17%", width: "80%", top:190,  fontFamily: 'Open Sans', fontSize: 12, textAlign:"left", marginLeft:90, fontWeight:600}}>{item.time}</p>
                </div>
            </div>
        );
        return (
            <div>
                <div className="topbar-curriculum">
                    <button  className="topbar-curriculum-academy" onClick={() =>{history.push({pathname:'/AcademyOverview'});}}>Academy</button>
                    <button  className="topbar-curriculum-guidance" onClick={() =>{history.push({pathname:'/DailyQA'});}}>Guidance</button>
                    <button  className="topbar-curriculum-actions" onClick={() => {history.push({pathname:'/ActionHome'});}}>Actions</button>
                    <button  className="topbar-curriculum-counselling" onClick={() =>{history.push({pathname:'/CurriculumOverview'});}}>Counselling</button>
                    <button  className="topbar-curriculum-community">Community</button>
                    <div className="curriculum-select"></div>
                    <img className="curriculum-profile-pic1" src={require("../images/ProfileIcon.png")}
                         alt="Zenful Inc. App"/>
                    <img className="curriculum-logo-overview" src={require("./freelancer.svg")}
                         alt="Zenful Inc. App"/>
                    <p className="curriculum-profile-name">Saish S. Shinde</p>
                </div>
                <div className="bigcard-HomeScreen" id="bigcard-HomeScreen1">
                <p className="HomeScreen-Caraousel2">Your Reminders</p>

                <div className="HomeScreen-Caraousel2-cards">
                    <ItemsCarousel
                        enablePlaceholder
                        numberOfPlaceholderItems={5}
                        minimumPlaceholderTime={1000}
                        numberOfCards={2}
                        gutter={0}
                        showSlither={true}
                        firstAndLastGutter={true}
                        freeScrolling={false}

                        requestToChangeActive={this.changeActiveItem1}
                        activeItemIndex={this.state.activeItemIndex1}
                        activePosition={'center'}
                        chevronWidth={24}
                        rightChevron={(<img className= "HomeScreen-btnWrapperStyle-left" src={require("../images/Path_4-3x.png")} alt="Zenful Inc. App"/>)}
                        leftChevron={(<img className= "HomeScreen-btnWrapperStyle-left" src={require("../images/icon_leftarrow-3x.png")} alt="Zenful Inc. App"/>)}
                        outsideChevron={false}
                    >
                        {schedule}
                    </ItemsCarousel>
                </div>
                </div>


            </div>

        );
    }
}

export default withRouter(UserHome);