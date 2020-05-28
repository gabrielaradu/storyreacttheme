import React from 'react';

class LatestArticle extends React.Component {

    render() {
        return (
            <section>
                <h1 className="d-inline flex-wrap background-title">Title of the latest article is here, to be
                    seen by
                    everyone!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis enim placerat lorem
                    vestibulum lacinia. Morbi lorem massa, pharetra quis urna feugiat, tincidunt tincidunt
                    sapien. Aenean euismod facilisis ex, sed malesuada velit efficitur id. Integer tempus
                    suscipit augue, eget tincidunt arcu mollis at. Proin lacinia risus non risus sagittis, in
                    hendrerit elit semper. Donec id ligula viverra, fringilla leo id, scelerisque nunc. Mauris
                    ac tempor arcu, non tempus leo. Aenean semper commodo lorem sed sodales. Quisque mattis ante
                    eu mauris elementum mollis. Quisque feugiat nulla tellus, non sagittis mauris blandit non.
                    Duis maximus purus sem, eu semper erat tristique nec. Mauris maximus risus at diam gravida,
                    in placerat ligula ultrices. Sed feugiat lacus vitae diam lobortis rutrum.
                </p>
                <div className="d-flex justify-content-center pt-4 pb-3 align-items-center">
                    <img
                        src="https://images.unsplash.com/photo-1528873981-36c6afde7b9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=516&q=80"
                        alt="a woman in white holding a big green leaf"/>
                </div>
                <p>
                    Quisque quam sapien, facilisis sit amet nibh non, condimentum rutrum nisi. Cras a mi eu nisl
                    pellentesque gravida. Nunc et quam nulla. Vestibulum interdum dui massa, pretium faucibus mi
                    cursus quis. Donec sagittis efficitur libero, ut blandit sem aliquet nec. Sed laoreet
                    finibus est, eget pretium arcu commodo eu. Pellentesque sed purus massa. Vivamus quis
                    elementum ex. Nullam odio orci, iaculis nec eleifend non, tempor eget elit. Donec sagittis
                    elementum rutrum. Vivamus elementum imperdiet interdum. Proin ac libero pretium, auctor est
                    non, porttitor ex. Proin a mollis augue. Cras pretium sollicitudin tortor eget eleifend.
                    Morbi scelerisque nisi at augue lobortis posuere.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis enim placerat lorem
                    vestibulum lacinia. Morbi lorem massa, pharetra quis urna feugiat, tincidunt tincidunt
                    sapien. Aenean euismod facilisis ex, sed malesuada velit efficitur id. Integer tempus
                    suscipit augue, eget tincidunt arcu mollis at. Proin lacinia risus non risus sagittis, in
                    hendrerit elit semper. Donec id ligula viverra, fringilla leo id, scelerisque nunc. Mauris
                    ac tempor arcu, non tempus leo. Aenean semper commodo lorem sed sodales. Quisque mattis ante
                    eu mauris elementum mollis. Quisque feugiat nulla tellus, non sagittis mauris blandit non.
                    Duis maximus purus sem, eu semper erat tristique nec. Mauris maximus risus at diam gravida,
                    in placerat ligula ultrices. Sed feugiat lacus vitae diam lobortis rutrum.
                </p>
                <p>
                    Quisque quam sapien, facilisis sit amet nibh non, condimentum rutrum nisi. Cras a mi eu nisl
                    pellentesque gravida. Nunc et quam nulla. Vestibulum interdum dui massa, pretium faucibus mi
                    cursus quis. Donec sagittis efficitur libero, ut blandit sem aliquet nec. Sed laoreet
                    finibus est, eget pretium arcu commodo eu. Pellentesque sed purus massa. Vivamus quis
                    elementum ex. Nullam odio orci, iaculis nec eleifend non, tempor eget elit. Donec sagittis
                    elementum rutrum. Vivamus elementum imperdiet interdum. Proin ac libero pretium, auctor est
                    non, porttitor ex. Proin a mollis augue. Cras pretium sollicitudin tortor eget eleifend.
                    Morbi scelerisque nisi at augue lobortis posuere.
                </p>
                <div className="quote-container mb-3 mt-3">
                    <img src={require('../img/quote.svg')} className="w-50 h-auto align-items-end" alt=""/>
                    <blockquote className="font-size-md">In recent years people have realized about the
                        importance of sustainability in what we do and consume
                        should be at the core of our logic and actions.
                    </blockquote>
                    <hr/>
                    <blockquote>Signed, <br/> Should be by everyone on Earth.</blockquote>
                </div>
                <p>
                    Quisque quam sapien, facilisis sit amet nibh non, condimentum rutrum nisi. Cras a mi eu nisl
                    pellentesque gravida. Nunc et quam nulla. Vestibulum interdum dui massa, pretium faucibus mi
                    cursus quis. Donec sagittis efficitur libero, ut blandit sem aliquet nec. Sed laoreet
                    finibus est, eget pretium arcu commodo eu. Pellentesque sed purus massa. Vivamus quis
                    elementum ex. Nullam odio orci, iaculis nec eleifend non, tempor eget elit. Donec sagittis
                    elementum rutrum. Vivamus elementum imperdiet interdum. Proin ac libero pretium, auctor est
                    non, porttitor ex. Proin a mollis augue. Cras pretium sollicitudin tortor eget eleifend.
                    Morbi scelerisque nisi at augue lobortis posuere.
                </p>
            </section>
        );
    }
}

export default LatestArticle;