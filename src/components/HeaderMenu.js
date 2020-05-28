import React from 'react';

class HeaderMenu extends React.Component {

    render() {
        return (
            <header className="d-flex header-main-container row">
                <div className="header-content col-md-7 col-sm-12">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 text-center">
                            <span className="w-100">Mental Health.</span>
                        </div>
                        <div className="col-md-9 col-sm-12 text-right font-size-sm">
                            <nav className="menu-items w-100">
                                <ul>
                                    <li>Posts</li>
                                    <li>About</li>
                                    <li>Write</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="row header-text no-left-margin-max-sm no-padding-max-sm">
                        <h1 className="d-inline flex-wrap">To keep you on the road to safety, here are a few basic
                            tricks</h1>
                        <p className="col-6 pt-2">
                            <span className="display-4">A</span>ale Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            Donec id ligula viverra, fringilla leo id, scelerisque nunc. Mauris
                            ac tempor arcu, non tempus leo. Aenean semper commodo lorem sed sodales. Quisque mattis ante
                            eu mauris elementum mollis. Quisque feugiat nulla tellus, non sagittis mauris blandit non.
                            Duis maximus purus sem, eu semper erat tristique nec.
                        </p>
                        <p className="col-6 pt-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            Donec id ligula viverra, fringilla leo id, scelerisque nunc. Mauris
                            ac tempor arcu, non tempus leo. Aenean semper commodo lorem sed sodales. Quisque mattis ante
                            eu mauris elementum mollis. Quisque feugiat nulla tellus, non sagittis mauris blandit non.
                            Duis maximus purus sem, eu semper erat tristique nec.
                        </p>
                    </div>
                </div>
                <div className="d-flex header-banner col-md-5 col-sm-12 justify-content-end justify-content-sm-center">
                    <img src={require('../img/main.jpg')} className="w-100 h-auto"
                         alt="a woman that is wearing white and a big leaf in her hands"/>
                </div>

            </header>
        );
    }
}

export default HeaderMenu;