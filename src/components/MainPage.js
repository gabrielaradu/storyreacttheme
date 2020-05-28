import React, {Component} from 'react';
import Main from "./Main";
import Page from "./Page";

class ProjectsPage extends Component {

    render() {
        const ComponentHoc = Page(Main);
        return (
            <ComponentHoc {...this.props}/>
        );
    }
}

export default ProjectsPage;
