import React from 'react';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareCount,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";

class ShareSocial extends React.Component {

    render() {
        return (
            <section>
                <div className="p-3" aria-label="facebook share button">
                    <FacebookIcon size={32} round={true}/>
                    <FacebookShareCount url={"localhost:3000"}>
                        {shareCount => <span
                            className="SocialMediaShareButton SocialMediaShareButton--twitter Demo__some-network__share-button">{shareCount}</span>}
                    </FacebookShareCount>
                </div>
                <div className="p-3" aria-label="twitter share button">
                    <TwitterIcon size={32} round={true}/>
                    <TwitterShareButton url={"localhost:3000"}>
                        {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                    </TwitterShareButton>
                </div>
                <div className="p-3" aria-label="linkedin share button">
                    <LinkedinIcon size={32} round={true}/>
                    <LinkedinShareButton url={"localhost:3000"}>
                        {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                    </LinkedinShareButton>
                </div>
                <div className="p-3" aria-label="email share button">
                    <EmailIcon size={32} round={true}/>
                    <EmailShareButton url={"localhost:3000"}>
                        {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                    </EmailShareButton>
                </div>
            </section>
        );
    }
}

export default ShareSocial;