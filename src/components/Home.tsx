import React from 'react';

function Home() {
  return (
    <div className='Home-Parent'>
        <section>
                <article>
                    <div>
                        <img id="ma-img-1" src="../assets/necklace-1.jpg"/>
                    </div>
                    <div>
                        <h1 id="ma-title">New in store</h1>
                        <p id="ma-description">The new jewelry collection is now available!</p>
                        <button id="button-new">Show new items &rarr;</button>
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <div>
                        <img id="sub-article-image" src="../assets/earrings-1.jpg"/>
                    </div>
                    <h1>Mid-season sale</h1>
                    <p>Up to 30% off of selected items!</p>
                    <button id="button-sale">View products &rarr;</button>
                </article>
                <article>
                    <div>
                        <h1>Artist of the month: Jane</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Tortor dignissim convallis aenean et tortor at. At volutpat diam 
                            ut venenatis tellus in metus vulputate. Morbi tincidunt augue interdum 
                            velit. Consectetur purus ut faucibus pulvinar. Nisi est sit amet facilisis 
                            magna etiam tempor. Elementum sagittis vitae et leo duis. Vestibulum lorem 
                            sed risus ultricies tristique nulla. Velit aliquet sagittis id consectetur 
                            purus ut faucibus pulvinar elementum. Et malesuada fames ac turpis egestas.
                        </p>
                    </div>
                    <div>
                        <img src="../assets/featured-artist.jpg"/>
                    </div>
                </article>
            </section>
    </div>
  );
}

export default Home;