import "./styles.css"
import React from 'react'

export enum SocialMediaPlatform {
    Twitter = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png",
    Facebook = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-512.png",
    Reddit = "https://cdn2.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Reddit-512.png",
    Slack = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Slack_colored_svg-512.png",
    Telegram = "https://cdn3.iconfinder.com/data/icons/social-icons-33/512/Telegram-512.png",
}
export interface SocialMediaInterface {
    platform: SocialMediaPlatform,
    link: string,
    name: string,
}

const SocialMediaDataField = React.memo<SocialMediaInterface>(({ name, link, platform }) => {
    if (link !== "") {
        return (
            <div className='social-media'>
                <img src={platform} alt={name} />
                <a target="_blank" href={name === "Twitter" ? `https://twitter.com/${link}` : link}>{name}</a>
            </div>
        )
    }

    return <></>
})

export default SocialMediaDataField