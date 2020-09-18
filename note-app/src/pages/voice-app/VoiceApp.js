import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from '../../components/news-cards/NewsCards';
import useStyles from './styles';

const alanKey = 'f6f68eb809c43d0416b136a54f3921742e956eca572e1d8b807a3e2338fdd0dc/stage';

const VoiceApp = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(()=> {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    // setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle(prevActiveArticle => prevActiveArticle + 1);
                }
            }
        });
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src='https://alan.app/voice/images/previews/preview.jpg' className={classes.alanLogo} alt='alan logo' />
            </div>
            <NewsCards articles={newsArticles} style={{overflow: 'scroll'}} activeArticle={activeArticle} />
        </div>
    )
}

export default VoiceApp
