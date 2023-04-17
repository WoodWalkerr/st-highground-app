import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import img from './assets/boracay-1.jpg'

function App() {
    const [activeImage, setActiveImage] = useState('./assets/mayon-1.webp')

    function handlePlaceHover(e) {
        setActiveImage(e.currentTarget.getAttribute('data-img'))
    }

    AOS.init()

    return (
        <div className="container">
            <div
                className="banner"
                style={{ backgroundImage: `url(${require(activeImage).default})` }}
                >
                <div
                    className="glass-wrapper"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="800"
                ></div>
            </div>
            <div className="hero-title">
                <p
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="700"
                >
                    Discover
                </p>
                <p
                    className="country"
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-duration="700"
                >
                    Philippines
                </p>
                <div
                    className="details"
                    data-aos="fade-left"
                    data-aos-delay="700"
                    data-aos-duration="700"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam repellendus voluptatum quod veritatis, quaerat
                    expedita dicta nobis. Perspiciatis doloribus voluptatem,
                    magni natus iusto ex, fugiat molestias, laudantium possimus
                    dolores soluta.
                </div>
                <div
                    className="explore"
                    data-aos="fade-left"
                    data-aos-delay="800"
                    data-aos-duration="700"
                >
                    <button>Explore</button>
                </div>
            </div>
            <div className="tourist-list">
                <ul className="place-list">
                    <li
                        className="active"
                        data-aos="fade-down"
                        data-aos-delay="600"
                        data-aos-duration="700"
                        data-img="./assets/mayon-1.webp"
                        onMouseEnter={handlePlaceHover}
                    >
                        <div
                            className="thumbnail"
                            style={{
                                backgroundImage: `url('./assets/mayon-1.webp')`,
                            }}
                        >
                            <div className="details">
                                <p className="province">Bicol</p>
                                <p className="place-name">Mayon Volcano</p>
                            </div>
                        </div>
                    </li>
                    <li
                        data-img="./assets/img/bohol-1.jpg"
                        data-aos="fade-down"
                        data-aos-delay="750"
                        data-aos-duration="700"
                        onMouseEnter={handlePlaceHover}
                    >
                        <div
                            className="thumbnail"
                            style={{
                                backgroundImage: `url('./assets/bohol-1.jpg')`,
                            }}
                        >
                            <div className="details">
                                <p className="province">Bohol</p>
                                <p className="place-name">Tarsier</p>
                            </div>
                        </div>
                    </li>
                    <li
                        data-img="./assets/img/palawan-1.jpg"
                        data-aos="
            fade-down"
                        data-aos-delay="900"
                        data-aos-duration="700"
                        onMouseEnter={handlePlaceHover}
                    >
                        <div
                            className="thumbnail"
                            style={{
                                backgroundImage: `url('./assets/palawan-1.jpg')`,
                            }}
                        >
                            <div className="details">
                                <p className="province">Palawan</p>
                                <p className="place-name">El Nido</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default App
