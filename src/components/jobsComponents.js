const JobComponent = ({ job, handleTagClick }) => {  
    const tags = [ 
        job.role,
        job.level,
        ...job.languages || [],
        ...job.tools || []
    ];

    return (
        <div className={`cuadros ${job.featured && 'borderFeatured'}`} id={job.id}>
            <div className="img" alt={job.company}>
                <img src={job.logo} alt={job.company}/>
            </div>
            <div className="header">
                <p>{job.company}</p>
                {job.new && (<span className="new">NEW</span>)}
                {job.featured && (<span className="featured">FEATURED</span>)}
            </div>
            <div className="main">
                <h2>{job.position}</h2>
                <p>
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>
            <div className="tags">
                {tags.map((elemento, indice) => 
                    <span onClick={()=>handleTagClick(elemento)}  className="button" key={indice}>{elemento}</span>
                )}
            </div>
        </div>
    )
}

export default JobComponent;
