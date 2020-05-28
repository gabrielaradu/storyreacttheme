import React, {Component} from 'react';
import '../styles/App.scss';
import ShareSocial from "./ShareSocial";
import RelatedArticles from "./RelatedArticles";
import LatestArticle from "./LatestArticle";

class Main extends Component {
    render() {
        return (
            <div className="main-focus-container small-padding-max-sm">
                <div className="row">
                    <div className="col-md-3 col-sm-12 p-3 hidden-sm">
                        <ShareSocial/>
                    </div>
                    <div className="col-md-9 col-sm-12 p-3">
                        <LatestArticle/>
                    </div>
                </div>
                <hr/>
                <div className="more-articles">
                    <RelatedArticles/>
                </div>
            </div>
        );
    }
}

export default Main;
