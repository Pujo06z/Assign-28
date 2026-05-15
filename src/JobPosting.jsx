import React from 'react';
import PropTypes from 'prop-types';

function JobPosting({title,company,type,salary,skills,onApply}){
    return(
        <div className="job-card">
            <h1>{title}</h1>
          <div className="company-info">
            <img src={company.logo} alt={company.name} />
            <span>{company.name}</span>
          </div>
          <p>Loại công việc: {type}</p>
          <p>Lương: {salary?.min} - {salary?.max} {salary?.currency}</p>
          <ul style={{listStyle: "none"}}>
            {skills?.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}
          </ul>
            <button onClick={onApply}>Ứng tuyển ngay</button>
        </div>
    )
}
JobPosting.PropTypes={
    title:PropTypes.string.isRequired,
    company:PropTypes.shape({
        name:PropTypes.string,
        logo:PropTypes.string
    }).isRequired,
    type: PropTypes.oneOf(['fulltime', 'parttime', 'freelance']),
    salary: PropTypes.shape({
        min:PropTypes.number,
        max: PropTypes.number,
        currency:PropTypes.string
    }),
    skills: PropTypes.arrayOf(PropTypes.string),
    onApply:PropTypes.func.isRequired

}
export default JobPosting;