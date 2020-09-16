import React from "react"

export default function ScheduleTable() {
  return (
    <table className="table table-hover table-primary">
      <thead>
        <tr>
          <th>#</th>
          <th>Event Name</th>
          <th>Host</th>
          <th>Time Block</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Learning Git</td>
          <td>John Filler</td>
          <td>8:00am-8:30am</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Learning Javascript</td>
          <td>John Filler</td>
          <td>9:00am-10:30am</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Learning Soft Skills</td>
          <td>John Filler</td>
          <td>11:00am-12:30pm</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Hacktober Celebration Kickoff</td>
          <td>De Anza Hacks Team</td>
          <td>??-??</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>WICS event</td>
          <td>De Anza Hacks Team</td>
          <td>??-??</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Wrapping Up</td>
          <td>De Anza Hacks Team</td>
          <td>??-??</td>
        </tr>
      </tbody>
    </table>
  )
}
