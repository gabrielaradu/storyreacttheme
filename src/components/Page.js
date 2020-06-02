import React, {Component} from 'react';
import HeaderMenu from "./HeaderMenu";
import Footer from "./Footer";

const Page = (InnerComponent) => class extends Component {

    render() {
        return (
            <div className="main-container overflow-auto h-100">
                <div className="">
                    <HeaderMenu/>
                    <InnerComponent {...this.props}/>
                    <Footer/>
                </div>
            </div>
        );
    }
};

export default Page;
