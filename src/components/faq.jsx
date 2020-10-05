import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@material-ui/core"
import faqStyles from "../styles/faq.module.css"

export default function () {
  const data = useStaticQuery(
    graphql`
      query FaqDataSection {
        allFaqDatJson {
          nodes {
            id
            title
            answer
          }
        }
      }
    `
  )
  return data.allFaqDatJson.nodes.map(node => (
    <div className={faqStyles.item}>
      <Accordion
        key={node.id}
        classes={{
          root: faqStyles.accordian,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={faqStyles.heading}>{node.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{node.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ))
}
