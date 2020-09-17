import React from "react"
import { Accordion } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import JSONData from '../data/faqDat.json'
import faqStyles from "../styles/faq.module.css"






export default function Faq({ data }) {

    return (
        JSONData.map((question, index) =>

            <div className={faqStyles.item}>
                <Accordion classes={{
                    root: faqStyles.accordian
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={faqStyles.heading}>{question.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {question.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        ))
}


