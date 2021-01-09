import React from 'react'
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets_article">
                <div className="widgets_articleLeft">
                    <FiberManualRecordIcon />
                </div>

                <div className="widgets_articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("India Inc slowly Heads Back to Office","Top News - 13445 readers")}
            {newsArticle("Smoking age set to be Raised","Social - 9291 readers")}
            {newsArticle("World leaders condemn 'disgraceful' scenes at US Capitol","Political - 7905 readers")}
            {newsArticle("Tesla is now the 5th-most-valuable in the S&P 500, overtaking Facebook","Business - 12246 readers")}
            {newsArticle("Sci-Simplified: Is Earth Rotating Faster?","Planetary - 15295 readers")}
        </div>
    )
}

export default Widgets
