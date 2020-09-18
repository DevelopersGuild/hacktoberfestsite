import React from "react"
import JSONData from '../data/homeData.json'
import aboutUsStyles from "../styles/about-us.module.css"
import Image from '../components/image'






export default function AboutUs() {


    return (
        <div className={aboutUsStyles.infoRow}>
                <div>
                    <div className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.topLeft}`}>
                        {JSONData["about-us-off-1"]}
                    </div>
                    <div className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.midLeft}`}>
                        {JSONData["about-us-off-2"]}
                    </div>
                    <div className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.bottomLeft}`}>
                        {JSONData["about-us-off-3"]}
                    </div>
                </div>
                <div style={{width: '400px', height: '400px'}} className={aboutUsStyles.mainInfo}>
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


