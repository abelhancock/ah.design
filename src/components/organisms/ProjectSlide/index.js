import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'


const ProjectSlide = ({ 
    title,
    titleColor,
    titleOutlineColor,
    description,
    img,
    alt 
}) => {

    return (
<div className={styles.slide}>
    <div className={styles.slideContents}>
        <h2 className={styles.slideTitle}>{title}</h2>
        <img src={img} alt={alt}/>
        <h2 className={styles.slideTitleOutline} >{title}</h2>
        <div className={styles.slideDescription}>{description}</div>
    </div>
</div>
    )
}


ProjectSlide.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
}

export default ProjectSlide