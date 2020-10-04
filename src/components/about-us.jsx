import React from "react"
import JSONData from '../data/homeData.json'
import aboutUsStyles from "../styles/about-us.module.css"
import Image from '../components/image'






export default class AboutUs extends React.Component {

    constructor(props) {
        super();
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div className={aboutUsStyles.infoRow}>
                <div>
                    <div className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.topLeft}`}>
                        {JSONData["about-us-off-1"]}
                    </div>
                    <div className={    `${aboutUsStyles.secondaryInfo} ${aboutUsStyles.midLeft}`}>
                        {JSONData["about-us-off-2"]}
                    </div>
                    <div className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.bottomLeft}`}>
                        {JSONData["about-us-off-3"]}
                    </div>
                </div>
                <div style={{ width: (this.state.width * 0.7).toString() + 'px', height: (this.state.width * 0.7).toString() + 'px', minHeight: '335px', minWidth: '335px', maxWidth: '450px', maxHeight: '450px' }} className={aboutUsStyles.mainInfo}>
                    {JSONData["about-us-main"]}
                </div>
                <div>
                    <div className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.topRight}`}>
                        {JSONData["about-us-off-4"]}
                    </div>
                    <div className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.midRight}`}>
                        {JSONData["about-us-off-5"]}
                    </div>
                    <div className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.bottomRight}`}>
                        {JSONData["about-us-off-6"]}
                    </div>
                </div>
            </div>
        )
    }

}


