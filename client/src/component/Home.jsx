import '../css/Home.css';
import PropTypes from 'prop-types';
import HeroImg from '../assets/images/Vector Gif/Hero.gif';
import Learn from '../assets/images/Learn.png';
import Grow from '../assets/images/Grow.png';
import Share from '../assets/images/Share.png';
import glichBitboxGif from '../assets/images/Other Gifs/Bitbox Glitch.gif';
import CardsPage from './HomePage/Card';
import { motion } from 'framer-motion'; // Importing framer-motion
import './Home.css';
import Testimonial from './Testimonial';

const worddata = [
    {
        title: "Community Collaboration",
        content: "Engage with a diverse community of developers, designers, and enthusiasts passionate about creating impactful software.",

    },
    {
        title: "Transparency and Accessibility",
        content: "Explore endless possibilities for innovation by harnessing the collective creativity of a global network of contributors",

    },
    {
        title: "Innovation and Creativity",
        content: "Explore endless possibilities for innovation by harnessing the collective creativity of a global network of contributors",

    },
    {
        title: "Flexibility and Customization",
        content: "Customize and adapt open-source projects to suit your specific needs, empowering you to build solutions tailored to your requirements.",
    },
    {
        title: "Learning and Skill Development",
        content: "Accelerate your learning and skill development through hands-on collaboration, mentorship, and continuous feedback within the open-source community.",
    },
    {
        title: "Global Impact",
        content: "Make a meaningful impact on a global scale by contributing to projects that address real-world challenges and improve the lives of people everywhere.",
    },


]

const Home = (props) => {
    const text = "Bitbox Community Cornerstone";
    return (
        <div>
            {/* Landing Page Section */}
            <motion.div
                className="content landing-page-container"
                style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                initial={{ opacity: 0, y: 50 }} // Initial animation state
                whileInView={{ opacity: 1, y: 0 }} // Animation on scroll
                transition={{ duration: 0.8 }} // Animation duration
                viewport={{ once: true }} // Trigger only once when in view
            >
                <section className="main-section flex md:flex-row flex-col-reverse container md:min-h-[100vh] md:mt-[12rem] md:mb-14 mt-[38rem]" >
                    <div className="content-left">
                        <div className="section-label" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? '#6366f2' : '#6366f1' }}>Very proud to introduce</div>
                        <h1 className="section-title" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Fueling Innovation Through Developer Collaboration</h1>
                        <div className="section-description" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            At BitBox, we simplify version control and collaboration by providing a user-friendly platform for developers. Whether you’re a solo programmer or part of a large team, BitBox offers intuitive tools to manage your projects efficiently. Experience fast, reliable performance and seamless integration with modern development workflows. With BitBox, managing and sharing your code becomes a smooth process, enabling you to focus on building better software.
                        </div>
                    </div>
                    <motion.div
                        className="content-right"
                        initial={{ opacity: 0, scale: 0.8 }} // Starting state of animation
                        whileInView={{ opacity: 1, scale: 1 }} // Animation on scroll
                        transition={{ duration: 0.8, delay: 0.3 }} // Add delay for staggered effect
                        viewport={{ once: true }} // Animate only once
                    >
                        <div className="image-container">
                            <img src={HeroImg} alt="sectionImage" className="section-image" />
                        </div>
                    </motion.div>
                </section>
            </motion.div>

            {/* Grow, Learn and Share */}
            <motion.section
                className={`container mt-[32rem] md:mt-[10rem] ${props.mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container my-5">
                    <motion.h2
                        className={`Heading-Page text-center mb-20 ${props.mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {text.split('').map((char, index) => (
                            <motion.span
                                key={index} // Unique key for each character
                                initial={{ opacity: 0, y: 20 }} // Start with invisible and slightly lower
                                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                                transition={{ duration: 0.6, delay: index * 0.1 }} // Add delay for staggered effect
                                viewport={{ once: true }} // Animation triggers once when in view
                            >
                                {char === ' ' ? '\u00A0' : char} {/* Preserve spaces */}
                            </motion.span>
                        ))}
                    </motion.h2>

                    {/* Grow Section */}
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <motion.div className="flex justify-center items-center">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className="w-[500px] rounded-5"
                                src={Grow}
                                alt="Grow"
                            />
                        </motion.div>
                        <motion.div className="p-5 mt-4 w-[60%]" animate={{ x: [0, 100, 0] }}>

                            <motion.h1
                                className="display-4"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Grow
                            </motion.h1>
                            <p className="lead">
                                Within Bitbox&apos;s open-source embrace, ideas flourish, boundless space.
                                Collaborating minds, a vibrant symphony, innovating together, unlocking our destiny.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Learn Section */}
                    <motion.div
                        className="flex items-center my-5"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-5 mt-4 w-[60%]">
                            <motion.h1
                                className="display-4"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Learn
                            </motion.h1>
                            <p className="lead">
                                📚 Within this dynamic ecosystem, ideas are shared freely, nurtured by the collective intellect of passionate developers and enthusiasts alike.
                                From seasoned veterans to eager newcomers, all are welcomed into the fold, united by a common mission:
                                to push the boundaries of what&apos;s possible in the realm of digital exchange.
                            </p>
                        </div>
                        <motion.div className="flex justify-center items-center">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className="w-[500px] rounded-5"
                                src={Learn}
                                alt="Learn"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Share Section */}
                    <motion.div
                        className="flex justify-center items-center my-5"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div className="flex justify-center items-center">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className="w-[500px] rounded-5"
                                src={Share}
                                alt="Share"
                            />
                        </motion.div>
                        <div className="p-5 mt-4 w-[60%]">
                            <motion.h1
                                className="display-4"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Share
                            </motion.h1>
                            <p className="lead">
                                🌐 Join the vibrant Bitbox Open Source Community today! Whether you&apos;re a seasoned developer or just starting out,
                                there&apos;s a place for you to collaborate, innovate, and make a difference.
                                Let&apos;s shape the future of digital exchange together! #BitboxCommunity #OpenSource 🚀💻
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>



            <CardsPage />

            {/* Service Section */}
            <div className="service-section" style={{ marginTop: "5rem", background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data-aos="fade-up" data-aos-duration='1600'>
                <div className='text-center' style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>We&apos;re Still</div>
                <h1 className="service-heading text-center" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Cooking Our Service</h1>
                <div className="service-description text-center" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>We are going to launch our service Very Soon,</div>
                <div className='text-center' style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Stay Tune.</div>
                <div className="service-splash-gif" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <img src={glichBitboxGif} alt="bitbox gif" />
                </div>
            </div>
            {/* Works Section */}
            <div className="work-Sec mb-2" style={{ background: props.mode === 'dark' ? 'black' : '#f7f7f7', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='work-heading' style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }} data-aos="zoom-out">
                    What We Work On
                </h2>


                <div className="work-row1  flex items-center justify-center">
                    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 pb-16 ">
                        {worddata.map((word, index) => (

                            <div
                                key={index}
                                className="py-16 px-3 rounded-2xl border-blue-main border-2 space-y-3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-main hover:shadow-lg group"
                                data-aos='zoom-in'
                                data-aos-delay={100 * index}
                                data-aos-duration='1700'
                            >
                                <h3 className="font-semibold text-[28px] text-center text-blue-main group-hover:text-white">
                                    {word.title}
                                </h3>
                                <p className="font-medium text-blue-main pl-6 group-hover:text-white">
                                    {word.content}
                                </p>
                            </div>

                        ))}
                    </div>

                </div>

                {/* <div className="work-row2" style={{ marginBottom: "2rem" }}>

        <div className="work-cont1">
            <h3 className='text hover-text'>Flexibility and Customization</h3>
            <div className="work-description">
                Customize and adapt open-source projects to suit your specific needs, empowering you to build solutions tailored to your requirements.
            </div>
        </div>
        <div className="work-cont2">
            <h3 className='text hover-text'>Learning and Skill Development</h3>
            <div className="work-description">
                Accelerate your learning and skill development through hands-on collaboration, mentorship, and continuous feedback within the open-source community.
            </div>
        </div>
        <div className="work-cont3">
            <h3 className='text hover-text'>Global Impact</h3>
            <div className="work-description">
                Make a meaningful impact on a global scale by contributing to projects that address real-world challenges and improve the lives of people everywhere.
            </div>
        </div>
    </div>*/}
            </div>

            <Testimonial />

            {/* Technology Section */}
            <div className='Technology-Sec' style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="Technology-Container">
                    <h2 className='Heading-Page mb-4' style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data-aos="zoom-out">Project Technology</h2>
                    <div className="content" data-aos="zoom-in" data-aos-duration="1700">
                        <div className="benefits">
                            <div className="basic-marquee basic-marquee-1">
                                <a className="social-media-link" href="#">
                                    {/* Linux */}
                                    <button className="button">
                                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#202020" d="M13.338 12.033c-.1-.112-.146-.319-.197-.54-.05-.22-.107-.457-.288-.61v-.001a.756.756 0 00-.223-.134c.252-.745.153-1.487-.1-2.157-.312-.823-.855-1.54-1.27-2.03-.464-.586-.918-1.142-.91-1.963.014-1.254.138-3.579-2.068-3.582-.09 0-.183.004-.28.012-2.466.198-1.812 2.803-1.849 3.675-.045.638-.174 1.14-.613 1.764-.515.613-1.24 1.604-1.584 2.637-.162.487-.24.984-.168 1.454-.023.02-.044.041-.064.063-.151.161-.263.357-.388.489-.116.116-.282.16-.464.225-.183.066-.383.162-.504.395v.001a.702.702 0 00-.077.339c0 .108.016.217.032.322.034.22.068.427.023.567-.144.395-.163.667-.061.865.102.199.31.286.547.335.473.1 1.114.075 1.619.342l.043-.082-.043.082c.54.283 1.089.383 1.526.284a.99.99 0 00.706-.552c.342-.002.717-.146 1.318-.18.408-.032.918.145 1.503.113a.806.806 0 00.068.183l.001.001c.227.455.65.662 1.1.627.45-.036.928-.301 1.315-.762l-.07-.06.07.06c.37-.448.982-.633 1.388-.878.203-.123.368-.276.38-.499.013-.222-.118-.471-.418-.805z" /><path fill="#F8BF11" d="M13.571 12.828c-.007.137-.107.24-.29.35-.368.222-1.019.414-1.434.918-.362.43-.802.665-1.19.696-.387.03-.721-.13-.919-.526v-.002c-.123-.233-.072-.6.031-.987s.251-.785.271-1.108v-.001c.02-.415.044-.776.114-1.055.07-.28.179-.468.373-.575a.876.876 0 01.027-.014c.022.359.2.725.514.804.343.09.838-.204 1.047-.445l.122-.004c.184-.005.337.006.495.143v.001c.121.102.179.296.229.512.05.217.09.453.239.621.287.32.38.534.371.672zM6.592 13.843v.003c-.034.435-.28.672-.656.758-.377.086-.888 0-1.398-.266-.565-.3-1.237-.27-1.667-.36-.216-.045-.357-.113-.421-.238-.064-.126-.066-.345.071-.72v-.001l.001-.002c.068-.209.018-.438-.015-.653-.033-.214-.049-.41.024-.546l.001-.001c.094-.181.232-.246.403-.307.17-.062.373-.11.533-.27l.001-.001h.001c.148-.157.26-.353.39-.492.11-.117.22-.195.385-.196h.005a.61.61 0 01.093.008c.22.033.411.187.596.437l.533.971v.001c.142.296.441.622.695.954.254.333.45.666.425.921z" /><path fill="#D6A312" d="M9.25 4.788c-.043-.084-.13-.164-.28-.225-.31-.133-.444-.142-.617-.254-.28-.181-.513-.244-.706-.244a.834.834 0 00-.272.047c-.236.08-.392.25-.49.342-.02.019-.044.035-.104.08-.06.043-.15.11-.28.208-.117.086-.154.2-.114.332.04.132.167.285.4.417h.001c.145.085.244.2.358.291a.801.801 0 00.189.117c.072.031.156.052.26.058.248.015.43-.06.59-.151.16-.092.296-.204.452-.255h.001c.32-.1.548-.301.62-.493a.324.324 0 00-.008-.27z" /><path fill="#202020" d="M8.438 5.26c-.255.133-.552.294-.869.294-.316 0-.566-.146-.745-.289-.09-.07-.163-.142-.218-.193-.096-.075-.084-.181-.045-.178.066.008.076.095.117.134.056.052.126.12.211.187.17.135.397.266.68.266.284 0 .614-.166.816-.28.115-.064.26-.179.379-.266.09-.067.087-.147.162-.138.075.009.02.089-.085.18-.105.092-.27.214-.403.283z" /><path fill="#ffffff" d="M12.337 10.694a1.724 1.724 0 00-.104 0h-.01c.088-.277-.106-.48-.621-.713-.534-.235-.96-.212-1.032.265-.005.025-.009.05-.011.076a.801.801 0 00-.12.054c-.252.137-.389.386-.465.692-.076.305-.098.674-.119 1.09-.013.208-.099.49-.186.79-.875.624-2.09.894-3.122.19-.07-.11-.15-.22-.233-.328a13.85 13.85 0 00-.16-.205.65.65 0 00.268-.05.34.34 0 00.186-.192c.063-.17 0-.408-.202-.68-.201-.273-.542-.58-1.043-.888-.368-.23-.574-.51-.67-.814-.097-.305-.084-.635-.01-.96.143-.625.51-1.233.743-1.614.063-.046.023.086-.236.567-.232.44-.667 1.455-.072 2.248.016-.564.15-1.14.377-1.677.329-.747 1.018-2.041 1.072-3.073.029.02.125.086.169.11.126.075.221.184.344.283a.85.85 0 00.575.2c.24 0 .427-.079.582-.168.17-.096.304-.204.433-.245.27-.085.486-.235.608-.41.21.83.7 2.027 1.014 2.611.167.31.5.969.643 1.762.091-.002.191.01.299.038.375-.973-.319-2.022-.636-2.314-.128-.124-.135-.18-.07-.177.343.304.795.917.96 1.608.075.315.09.646.01.973.04.017.08.034.12.054.603.293.826.548.719.897z" /><path fill="#E6E6E6" d="M8.04 8.062c-.556.002-1.099.251-1.558.716-.46.464-.814 1.122-1.018 1.888l.061.038v.004c.47.298.805.598 1.012.878.219.296.316.584.223.834a.513.513 0 01-.27.283l-.041.015c.074.097.146.197.213.3.944.628 2.042.396 2.867-.172.08-.278.153-.536.163-.698.021-.415.042-.792.124-1.12.082-.33.242-.63.544-.795.017-.01.034-.015.051-.023a.756.756 0 01.022-.094c-.242-.622-.591-1.14-1.01-1.5-.42-.36-.897-.551-1.382-.554zm2.37 2.155l-.002.005v-.002l.001-.004z" /><path fill="#ffffff" d="M9.278 3.833a1.05 1.05 0 01-.215.656 4.119 4.119 0 00-.218-.09l-.127-.045c.029-.035.085-.075.107-.127a.669.669 0 00.05-.243l.001-.01a.673.673 0 00-.035-.236.434.434 0 00-.108-.184.223.223 0 00-.156-.07H8.57a.228.228 0 00-.151.06.434.434 0 00-.122.175.676.676 0 00-.05.243v.01a.718.718 0 00.009.14 1.773 1.773 0 00-.354-.12 1.196 1.196 0 01-.01-.133v-.013a1.035 1.035 0 01.088-.447.793.793 0 01.25-.328.554.554 0 01.346-.123h.006c.125 0 .232.036.342.116a.78.78 0 01.257.324c.063.138.094.273.097.433l.001.012zM7.388 3.997a1.05 1.05 0 00-.277.125.623.623 0 00.002-.15v-.008a.651.651 0 00-.048-.192.37.37 0 00-.096-.141.158.158 0 00-.119-.045c-.042.004-.077.024-.11.065a.372.372 0 00-.07.156.626.626 0 00-.013.205v.008a.634.634 0 00.048.193.367.367 0 00.116.156l-.102.08-.078.056a.706.706 0 01-.16-.24c-.053-.12-.082-.24-.09-.381v-.001a1.071 1.071 0 01.045-.39.668.668 0 01.167-.292.359.359 0 01.264-.118c.084 0 .158.028.235.09a.68.68 0 01.199.271c.053.12.08.24.089.382v.001c.003.06.003.115-.002.17z" /><path fill="#202020" d="M7.806 4.335c.01.034.065.029.097.045.027.014.05.045.08.046.03.001.076-.01.08-.04.005-.038-.052-.063-.088-.077-.047-.019-.107-.028-.151-.003-.01.005-.021.018-.018.03zM7.484 4.335c-.01.034-.065.029-.096.045-.028.014-.05.045-.081.046-.03.001-.076-.01-.08-.04-.005-.038.052-.063.088-.077.047-.019.108-.028.152-.003.01.005.02.018.017.03z" /></svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Android */}
                                        <svg viewBox="-3 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <title>Android-color</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs>
                                            </defs>
                                            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Color-" transform="translate(-304.000000, -560.000000)" fill="#95CF00">
                                                    <path d="M330.727009,569.600905 C329.935377,569.600905 329.294532,568.977195 329.294532,568.206729 C329.294532,567.436264 329.935377,566.815376 330.727009,566.815376 C331.518641,566.815376 332.159486,567.436264 332.159486,568.206729 C332.159486,568.977195 331.518641,569.600905 330.727009,569.600905 L330.727009,569.600905 Z M319.272991,569.600905 C318.481359,569.600905 317.840514,568.977195 317.840514,568.206729 C317.840514,567.436264 318.481359,566.815376 319.272991,566.815376 C320.064623,566.815376 320.705468,567.436264 320.705468,568.206729 C320.705468,568.977195 320.064623,569.600905 319.272991,569.600905 L319.272991,569.600905 Z M331.573737,564.018558 L332.107291,563.233981 L332.640845,562.460694 L333.829743,560.722208 C333.97763,560.507719 333.916736,560.219853 333.696355,560.078742 C333.478873,559.934809 333.180199,559.994075 333.038111,560.208564 L331.222867,562.852982 L330.677713,563.648847 C328.952361,562.996915 327.029826,562.632849 325,562.632849 C322.973074,562.632849 321.047639,562.996915 319.322287,563.648847 L318.780033,562.852982 L318.243579,562.071228 L316.967688,560.208564 C316.819801,559.994075 316.524027,559.937631 316.303645,560.078742 C316.086164,560.219853 316.025269,560.507719 316.170257,560.722208 L317.359155,562.460694 L317.892709,563.233981 L318.429163,564.018558 C314.37821,565.855822 311.637945,569.335616 311.637945,573.317766 L338.362055,573.317766 C338.362055,569.335616 335.62179,565.855822 331.573737,564.018558 Z M311.843828,575.174785 L311.637945,575.174785 L311.637945,595.613286 C311.637945,597.236061 312.992129,598.556859 314.662386,598.556859 L316.842999,598.556859 C316.767606,598.802392 316.727009,599.059214 316.727009,599.330147 L316.727009,605.214471 C316.727009,606.75258 318.011599,608 319.591964,608 C321.172328,608 322.456918,606.75258 322.456918,605.214471 L322.456918,599.330147 C322.456918,599.059214 322.413422,598.802392 322.340928,598.556859 L327.659072,598.556859 C327.586578,598.802392 327.545982,599.059214 327.545982,599.330147 L327.545982,605.214471 C327.545982,606.75258 328.827672,608 330.408036,608 C331.991301,608 333.275891,606.75258 333.275891,605.214471 L333.275891,599.330147 C333.275891,599.059214 333.232394,598.802392 333.157001,598.556859 L335.340514,598.556859 C337.010771,598.556859 338.362055,597.236061 338.362055,595.613286 L338.362055,575.174785 L311.843828,575.174785 Z M306.864954,575.174785 C305.28169,575.174785 304,576.422205 304,577.960314 L304,589.884184 C304,591.422293 305.28169,592.669713 306.864954,592.669713 C308.445319,592.669713 309.727009,591.422293 309.727009,589.884184 L309.727009,577.960314 C309.727009,576.422205 308.445319,575.174785 306.864954,575.174785 Z M343.137945,575.174785 C341.554681,575.174785 340.272991,576.422205 340.272991,577.960314 L340.272991,589.884184 C340.272991,591.422293 341.554681,592.669713 343.137945,592.669713 C344.71831,592.669713 346,591.422293 346,589.884184 L346,577.960314 C346,576.422205 344.71831,575.174785 343.137945,575.174785 Z" id="Android">

                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* GITHUB */}
                                        <svg viewBox="0 -0.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <title>Github-color</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs>
                                            </defs>
                                            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#3E75C3">
                                                    <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github">

                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* MatLab */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="Z8bG89TnZW8~BwJjzqmnXa" x1="22.645" x2="26.757" y1="10.881" y2="23.854" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4adddf" /><stop offset=".699" stopColor="#3f5352" /><stop offset=".863" stopColor="#442729" /></linearGradient><path fill="url(#Z8bG89TnZW8~BwJjzqmnXa)" d="M21,27l-7-6c0,0,1-1.5,2.5-3s2.736-1.852,4.5-3c3.511-2.284,6.5-12,11-12L21,27z" /><linearGradient id="Z8bG89TnZW8~BwJjzqmnXb" x1="1" x2="37.775" y1="27.033" y2="27.033" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4adddf" /><stop offset=".792" stopColor="#3f5352" /><stop offset="1" stopColor="#442729" /></linearGradient><polygon fill="url(#Z8bG89TnZW8~BwJjzqmnXb)" points="11,33.066 1,26 14,21 21.277,26.465 14,32.066" /><linearGradient id="Z8bG89TnZW8~BwJjzqmnXc" x1="11" x2="47" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".206" stopColor="#53140f" /><stop offset=".3" stopColor="#84360f" /><stop offset=".413" stopColor="#b85b10" /><stop offset=".511" stopColor="#df7610" /><stop offset=".59" stopColor="#f68710" /><stop offset=".639" stopColor="#ff8d10" /><stop offset=".729" stopColor="#fd8a10" /><stop offset=".8" stopColor="#f58010" /><stop offset=".865" stopColor="#e86f10" /><stop offset=".925" stopColor="#d65811" /><stop offset=".982" stopColor="#c03a11" /><stop offset="1" stopColor="#b72f11" /></linearGradient><path fill="url(#Z8bG89TnZW8~BwJjzqmnXc)" d="M32,3c5,0,13,27,15,34c0,0-7.017-6.63-11-6s-5.47,6.548-9.725,10.756C23.5,44.5,21,45,21,45	s-0.206-8.124-5-11c-2.5-1.5-5-1-5-1s6.049-2.901,9.474-8.174S28.5,3,32,3z" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* BootStrap */}
                                    <button className="button">
                                        <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                                            <g>
                                                <path d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z" fill="#563D7C">

                                                </path>
                                                <path d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z" fill="#FFFFFF">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* PHP */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill="#dcd5f2" d="M15,22.5c-7.995,0-14.5-3.364-14.5-7.5S7.005,7.5,15,7.5s14.5,3.364,14.5,7.5S22.995,22.5,15,22.5z" /><path fill="#8b75a1" d="M15,8c7.589,0,14,3.206,14,7s-6.411,7-14,7S1,18.794,1,15S7.411,8,15,8 M15,7C6.716,7,0,10.582,0,15 s6.716,8,15,8s15-3.582,15-8S23.284,7,15,7L15,7z" /><path fill="#36404d" d="M9.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C10.69 15.599 10.216 16 8.089 16H6.58l.563-3H9.417M9.417 12H6.313L5 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C12.316 13.084 11.039 12 9.417 12L9.417 12zM22.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C23.69 15.599 23.216 16 21.089 16H19.58l.563-3H22.417M22.417 12h-3.104L18 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C25.316 13.084 24.039 12 22.417 12L22.417 12z" /><g><path fill="#36404d" d="M17.652,12.424C17.323,12.122,16.742,12,15.875,12h-1.848l0.451-2h-1.017L12,17h1.016l0.841-4h0.171 h1.848c0.91,0,1.094,0.155,1.096,0.155c0.019,0.03,0.058,0.194-0.008,0.532L16.288,17h1.046l0.61-3.121 C18.075,13.212,17.976,12.722,17.652,12.424z" /></g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Java */}
                                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00" />
                                            <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00" />
                                            <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1" />
                                            <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1" />
                                            <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1" />
                                            <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1" />
                                            <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1" />
                                            <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* JavaScript */}
                                        <svg
                                            viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
                                            <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" />
                                            <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* NPM */}
                                        <svg
                                            viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M0 10V20H9V22H16V20H32V10H0Z" fill="#CB3837" />
                                            <path d="M5.46205 12H2V18H5.46205V13.6111H7.22344V18H8.98482V12H5.46205ZM10.7462 12V20H14.269V18H17.731V12H10.7462ZM15.9696 16.3889H14.269V13.6111H15.9696V16.3889ZM22.9545 12H19.4924V18H22.9545V13.6111H24.7158V18H26.4772V13.6111H28.2386V18H30V12H22.9545Z" fill="white" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* React */}
                                        <svg
                                            viewBox="0 -14 256 256"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"
                                        >
                                            <g>
                                                <path d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z" fill="#00D8FF">

                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* HTML */}
                                        <svg
                                            viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
                                            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
                                            <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* CSS */}
                                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
                                            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
                                            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* Power BI */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#ffc107" d="M40,41H8c-2.206,0-4-1.794-4-4V11c0-2.206,1.794-4,4-4h32c2.206,0,4,1.794,4,4v26	C44,39.206,42.206,41,40,41z" /><path fill="#212121" d="M34,12.98H14.02c-2.2,0-4,1.79-4,4V30c0,1.86,1.27,3.42,2.98,3.86v-2.14	c-0.59-0.35-0.98-0.99-0.98-1.72V16.98c0-1.1,0.9-2,2-2H34c1.1,0,2,0.9,2,2V30c0,0.74-0.4,1.38-1,1.73v2.14c1.73-0.44,3-2.01,3-3.87	V16.98C38,14.77,36.21,12.98,34,12.98z" /><path fill="#212121" d="M16.5,28L16.5,28c0.828,0,1.5,0.672,1.5,1.5v5c0,0.828-0.672,1.5-1.5,1.5l0,0	c-0.828,0-1.5-0.672-1.5-1.5v-5C15,28.672,15.672,28,16.5,28z" /><path fill="#212121" d="M21.5,22L21.5,22c0.828,0,1.5,0.672,1.5,1.5v11c0,0.828-0.672,1.5-1.5,1.5l0,0	c-0.828,0-1.5-0.672-1.5-1.5v-11C20,22.672,20.672,22,21.5,22z" /><path fill="#212121" d="M26.5,25L26.5,25c0.828,0,1.5,0.672,1.5,1.5v8c0,0.828-0.672,1.5-1.5,1.5l0,0	c-0.828,0-1.5-0.672-1.5-1.5v-8C25,25.672,25.672,25,26.5,25z" /><path fill="#212121" d="M31.5,18L31.5,18c0.828,0,1.5,0.672,1.5,1.5v15c0,0.828-0.672,1.5-1.5,1.5l0,0	c-0.828,0-1.5-0.672-1.5-1.5v-15C30,18.672,30.672,18,31.5,18z" /></svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* MongoDB */}
                                        <svg
                                            viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <title>databases-and-servers/databases/mongodb</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs>

                                            </defs>
                                            <g id="databases-and-servers/databases/mongodb" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="container" transform="translate(2.000000, 2.000000)" fill="#FFFFFF" fillRule="nonzero" stroke="#134514" strokeWidth="2">
                                                    <rect id="mask" x="-1" y="-1" width="71" height="71" rx="14">

                                                    </rect>
                                                </g>
                                                <g id="Group" transform="translate(25.000000, 11.000000)" fillRule="nonzero">
                                                    <path d="M12.4944775,50.7282275 L11.1460449,50.2673438 C11.1460449,50.2673438 11.3107227,43.3929395 8.8434082,42.8996191 C7.19912598,40.9915674 9.10717773,-38.0181006 15.0277344,42.6362061 C15.0277344,42.6362061 12.9881543,43.6556396 12.6263623,45.3993701 C12.2314209,47.1099512 12.4944775,50.7282275 12.4944775,50.7282275 Z" id="Shape" fill="#A6A385">

                                                    </path>
                                                    <path d="M13.218418,44.0837305 C13.218418,44.0837305 25.0274512,36.320708 22.2639307,20.1698145 C19.5998584,8.42743652 13.3171533,4.57889648 12.6263623,3.0985791 C11.8699854,2.04599609 11.1460449,0.204243164 11.1460449,0.204243164 L11.6397217,32.8667529 C11.6397217,32.8999023 10.6199316,42.8664697 13.2187744,44.0840869" id="Shape" fill="#499D4A">

                                                    </path>
                                                    <path d="M10.4556104,44.5111084 C10.4556104,44.5111084 -0.629838867,36.9455566 0.0281591797,23.624126 C0.653007813,10.3023389 8.48161621,3.75657715 9.99472656,2.57246582 C10.9817236,1.51988281 11.0145166,1.12494141 11.080459,0.0723583984 C11.77125,1.55267578 11.6397217,22.209751 11.7381006,24.6435596 C12.0339502,34.0180713 11.2119873,42.7352979 10.4556104,44.5111084 Z" id="Shape" fill="#58AA50">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* GIT */}
                                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B" />
                                            <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* NodeJS */}
                                        <svg viewBox="-13 0 282 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                            <g fill="#8CC84B">
                                                <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />

                                                <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />

                                            </g>

                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* Google Fonts */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" baseProfile="basic"><circle cx="36" cy="15" r="7" fill="#1a73e8" /><circle cx="36" cy="31" r="9" fill="#34a853" /><path fill="#fbbc04" d="M3,40L23,8h13v5L19,40" /><path fill="#1a73e8" d="M36,40H23V8h13V40z" /><path fill="#0d652d" d="M36,40c-4.971,0-9-4.029-9-9	s4.029-9,9-9V40z" /><path fill="#174ea6" d="M36,22c-3.867,0-7-3.135-7-7	s3.133-7,7-7V22z" /><path fill="#ea4335" d="M4,14c0-3.313,2.687-6,6-6s6,2.687,6,6	s-2.687,6-6,6S4,17.313,4,14z" /></svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* MongoDB */}
                                    <button className="button">
                                        <svg viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="200" height="180" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z" /></svg>
                                    </button>
                                </a>
                            </div>
                            <div className="basic-marquee basic-marquee-2">
                                <a className="social-media-link" href="#">
                                    {/* Jupyter Notebook */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="70AWaG9FpYs2yn8LzRfdUa" x1="17.151" x2="29.996" y1="8.498" y2="37.571" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f09701" /><stop offset="1" stopColor="#e36001" /></linearGradient><path fill="url(#70AWaG9FpYs2yn8LzRfdUa)" d="M8.108,18.006C10.534,11.579,16.724,7,24,7c7.276,0,13.466,4.579,15.892,11.006	C36.653,14.6,30.757,12.313,24,12.313C17.243,12.313,11.347,14.6,8.108,18.006z M24,35.688c-6.757,0-12.653-2.287-15.892-5.693	C10.534,36.421,16.724,41,24,41c7.276,0,13.466-4.579,15.892-11.006C36.653,33.4,30.757,35.688,24,35.688z" /><linearGradient id="70AWaG9FpYs2yn8LzRfdUb" x1="1.319" x2="25.671" y1="44.651" y2="1.059" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#a1aab3" /><stop offset="1" stopColor="#8f979e" /></linearGradient><path fill="url(#70AWaG9FpYs2yn8LzRfdUb)" d="M39.512,4.744c0,1.515-1.228,2.744-2.744,2.744s-2.744-1.228-2.744-2.744S35.253,2,36.768,2	S39.512,3.228,39.512,4.744z M10.976,40.415c-1.818,0-3.293,1.474-3.293,3.293c0,1.818,1.474,3.293,3.293,3.293	s3.293-1.474,3.293-3.293C14.268,41.889,12.794,40.415,10.976,40.415z M7.683,6.39c-1.212,0-2.195,0.983-2.195,2.195	s0.983,2.195,2.195,2.195s2.195-0.983,2.195-2.195S8.895,6.39,7.683,6.39z" /></svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Figma */}
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="none" fillRule="evenodd" transform="translate(4)">
                                                <circle cx="12" cy="12" r="4" fill="#19BCFE" />
                                                <path fill="#09CF83" d="M4,24 C6.209139,24 8,22.209139 8,20 C8,19.3969461 8,18.0636128 8,16 C6.20303877,16 4.86970543,16 4,16 C1.790861,16 0,17.790861 0,20 C0,22.209139 1.790861,24 4,24 Z" />
                                                <path fill="#A259FF" d="M4,16 C4.73637967,16 6.069713,16 8,16 L8,8 C6.069713,8 4.73637967,8 4,8 C1.790861,8 0,9.790861 0,12 C0,14.209139 1.790861,16 4,16 Z" />
                                                <path fill="#F24E1E" d="M4,8 C4.73637967,8 6.069713,8 8,8 L8,0 C6.069713,0 4.73637967,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z" />
                                                <path fill="#FF7262" d="M12,8 L8,8 L8,8 L8,0 L12,0 L12,0 C14.209139,0 16,1.790861 16,4 C16,6.209139 14.209139,8 12,8 Z" />
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* BlockChain */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#2196F3" d="M34.399 6.059c.534-.114 1.023-.216 1.512-.325.039-.009.096-.069.097-.105C36.013 5.09 36.012 4.551 36.012 4c-.512.117-.994.223-1.473.343-.055.014-.133.095-.133.146C34.396 4.998 34.399 5.509 34.399 6.059zM36.013 44c0-.55.003-1.083-.007-1.616-.001-.046-.091-.116-.15-.13-.308-.075-.618-.137-.929-.201-.169-.035-.339-.067-.528-.104 0 .54-.003 1.043.004 1.545.001.053.053.143.096.153C34.993 43.77 35.49 43.88 36.013 44zM33.996 6.141c0-.581 0-1.122 0-1.677-.362.074-.709.144-1.056.217-.552.117-.552.118-.552.697 0 .35 0 .698 0 1.068C32.948 6.34 33.47 6.241 33.996 6.141zM32.388 41.555c0 .546-.003 1.042.004 1.537.001.045.053.122.093.13.498.109.998.209 1.511.313 0-.566 0-1.114 0-1.677C33.466 41.758 32.943 41.66 32.388 41.555zM30.389 6.784c.513-.084.986-.158 1.457-.244.057-.01.147-.083.148-.13.01-.502.007-1.004.007-1.534-.53.094-1.031.182-1.531.277-.033.006-.077.077-.077.119C30.388 5.767 30.389 6.262 30.389 6.784zM29.993 41.153c-.541-.078-1.066-.154-1.6-.231 0 .543 0 1.066 0 1.59.54.085 1.064.168 1.6.252C29.993 42.22 29.993 41.702 29.993 41.153zM24.313 7.538c.519-.05 1.023-.097 1.528-.152.038-.004.099-.064.099-.1.007-.483.004-.967.004-1.47-.567.062-1.1.12-1.631.178C24.313 6.517 24.313 7.017 24.313 7.538zM23.902 41.965c0-.35 0-.679 0-1.009 0-.517 0-.52-.507-.569-.367-.036-.734-.061-1.114-.091 0 .523 0 1.016 0 1.532C22.818 41.874 23.346 41.919 23.902 41.965zM23.889 6.033c-.553.048-1.08.094-1.607.14 0 .518 0 1.01 0 1.528.542-.042 1.07-.082 1.607-.123C23.889 7.057 23.889 6.557 23.889 6.033zM26.349 42.233c.539.071 1.065.142 1.604.213 0-.539 0-1.054 0-1.584-.538-.065-1.064-.128-1.604-.193C26.349 41.202 26.349 41.703 26.349 42.233zM27.953 5.552c-.545.073-1.076.144-1.599.215 0 .532 0 1.039 0 1.564.545-.066 1.071-.13 1.599-.194C27.953 6.598 27.953 6.083 27.953 5.552zM20.245 6.296c0 .521 0 1.017 0 1.527.551-.032 1.081-.063 1.609-.095 0-.519 0-1.012 0-1.523C21.314 6.236 20.79 6.265 20.245 6.296zM21.857 40.269c-.555-.029-1.082-.057-1.634-.085 0 .485-.005.939.007 1.392.002.048.098.128.157.135.237.028.476.034.716.046.251.013.501.025.754.037C21.857 41.276 21.857 40.784 21.857 40.269zM16.165 41.594c.541 0 1.07 0 1.609 0 0-.488 0-.979 0-1.494-.538 0-1.067 0-1.609 0C16.165 40.583 16.165 41.067 16.165 41.594zM18.205 41.645c.552 0 1.08 0 1.607 0 0-.491 0-.977 0-1.496-.54 0-1.069 0-1.607 0C18.205 40.629 18.205 41.114 18.205 41.645zM17.774 7.898c0-.52 0-1.006 0-1.49-.542 0-1.071 0-1.603 0 0 .515 0 1.004 0 1.49C16.715 7.898 17.238 7.898 17.774 7.898zM14.117 7.897c.54 0 1.07 0 1.607 0 0-.495 0-.984 0-1.494-.545 0-1.075 0-1.607 0C14.117 6.905 14.117 7.391 14.117 7.897zM36.006 8.006c-.55.103-1.076.203-1.588.3 0 .51 0 .984 0 1.487.543-.092 1.064-.18 1.588-.269C36.006 9.014 36.006 8.53 36.006 8.006zM34.399 38.205c0 .294-.003.544.001.795.003.226-.064.512.046.659.099.132.395.116.606.157.313.061.627.116.945.173 0-.527 0-1.017 0-1.515C35.467 38.384 34.952 38.297 34.399 38.205zM37.997 38.845c-.529-.099-1.043-.195-1.571-.294 0 .52 0 1.014 0 1.523.523.109 1.041.216 1.571.325C37.997 39.876 37.997 39.373 37.997 38.845zM36.43 9.45c.535-.102 1.054-.201 1.565-.298 0-.537 0-1.039 0-1.554-.53.11-1.049.219-1.565.327C36.43 8.441 36.43 8.934 36.43 9.45zM37.994 5.649c-.498.114-.988.224-1.474.342C36.48 6 36.423 6.057 36.423 6.091c-.007.477-.004.954-.004 1.448.543-.116 1.055-.225 1.576-.337C37.994 6.69 37.994 6.188 37.994 5.649zM32.397 10.101c.55-.083 1.073-.162 1.594-.241 0-.501 0-.983 0-1.482-.542.09-1.064.177-1.594.264C32.397 9.13 32.397 9.599 32.397 10.101zM33.989 39.619c0-.512 0-.995 0-1.481-.536-.081-1.054-.158-1.588-.238 0 .496 0 .971 0 1.457C32.931 39.444 33.449 39.53 33.989 39.619zM33.994 41.482c0-.503 0-.987 0-1.483-.534-.09-1.055-.179-1.594-.27 0 .497 0 .972 0 1.457C32.932 41.284 33.454 41.382 33.994 41.482zM33.996 6.519c-.498.092-.985.179-1.47.276-.051.01-.132.075-.133.116-.009.445-.006.89-.006 1.363C32.944 8.179 33.467 8.09 33.996 8 33.996 7.497 33.996 7.012 33.996 6.519zM25.931 40.27c0-.481 0-.924 0-1.381-.549-.048-1.082-.095-1.618-.142 0 .476 0 .913 0 1.364C24.852 40.164 25.381 40.217 25.931 40.27zM24.307 38.399c.553.047 1.086.092 1.611.137.015-.043.024-.058.024-.073.002-.267.003-.534.004-.801.001-.49 0-.49-.468-.534-.046-.004-.091-.015-.138-.018-.342-.024-.684-.048-1.034-.072C24.307 37.507 24.307 37.937 24.307 38.399zM8.013 11.349c0 .465 0 .901 0 1.359.541.03 1.07.057 1.605.087 0-.466 0-.903 0-1.356C9.077 11.409 8.55 11.379 8.013 11.349zM8.012 38.367c.546-.038 1.073-.076 1.607-.113 0-.459 0-.895 0-1.352-.541.035-1.069.068-1.607.103C8.012 37.461 8.012 37.898 8.012 38.367zM8.001 14.809c0 .393-.003.807.005 1.221.001.037.078.102.12.103.492.007.982.004 1.488.004 0-.409 0-.85 0-1.328C9.073 14.809 8.55 14.809 8.001 14.809zM8.013 17.857c.544 0 1.067 0 1.603 0 0-.432 0-.875 0-1.348-.541 0-1.065 0-1.603 0C8.013 16.933 8.013 17.37 8.013 17.857zM9.621 35.203c-.551.031-1.079.062-1.607.091 0 .468 0 .905 0 1.361.543-.034 1.07-.066 1.607-.099C9.621 36.102 9.621 35.672 9.621 35.203zM9.621 19.914c-.55 0-1.071 0-1.605 0 0 .444 0 .886 0 1.347.545 0 1.073 0 1.605 0C9.621 20.81 9.621 20.381 9.621 19.914zM9.623 26.75c-.551 0-1.079 0-1.606 0 0 .463 0 .905 0 1.319.545 0 1.073 0 1.606 0C9.623 27.61 9.623 27.187 9.623 26.75zM8.012 29.777c.542 0 1.07 0 1.606 0 0-.47 0-.905 0-1.327-.542 0-1.07 0-1.606 0C8.012 28.918 8.012 29.355 8.012 29.777zM17.78 9.937c-.551 0-1.081 0-1.609 0 0 .455 0 .889 0 1.311.548 0 1.076 0 1.609 0C17.78 10.799 17.78 10.376 17.78 9.937zM15.728 9.933c-.545 0-1.074 0-1.611 0 0 .443 0 .872 0 1.321.539 0 1.069 0 1.611 0C15.728 10.822 15.728 10.392 15.728 9.933zM14.121 19.627c.542 0 1.07 0 1.604 0 0-.447 0-.88 0-1.313-.545 0-1.074 0-1.604 0C14.121 18.76 14.121 19.189 14.121 19.627zM14.118 29.685c.553 0 1.082 0 1.611 0 0-.452 0-.882 0-1.314-.541 0-1.07 0-1.611 0C14.118 28.82 14.118 29.249 14.118 29.685zM13.686 21.655c-.547 0-1.076 0-1.612 0 0 .445 0 .875 0 1.323.542 0 1.072 0 1.612 0C13.686 22.538 13.686 22.107 13.686 21.655zM14.126 21.666c0 .448 0 .882 0 1.312.547 0 1.076 0 1.603 0 0-.446 0-.876 0-1.312C15.186 21.666 14.657 21.666 14.126 21.666zM10.043 21.277c.539 0 1.068 0 1.598 0 0-.439 0-.87 0-1.323-.538 0-1.066 0-1.598 0C10.043 20.394 10.043 20.824 10.043 21.277zM13.683 25.027c-.548 0-1.077 0-1.612 0 0 .448 0 .878 0 1.318.539 0 1.07 0 1.612 0C13.683 25.901 13.683 25.471 13.683 25.027zM15.736 25.023c-.551 0-1.08 0-1.609 0 0 .449 0 .883 0 1.311.548 0 1.076 0 1.609 0C15.736 25.893 15.736 25.47 15.736 25.023zM11.645 26.727c-.551 0-1.076 0-1.601 0 0 .458 0 .887 0 1.315.539 0 1.067 0 1.601 0C11.645 27.591 11.645 27.161 11.645 26.727zM11.639 24.671c0-.45 0-.885 0-1.328-.538 0-1.064 0-1.591 0 0 .451 0 .886 0 1.328C10.589 24.671 11.11 24.671 11.639 24.671zM10.043 29.73c.539 0 1.066 0 1.596 0 0-.461 0-.89 0-1.309-.54 0-1.067 0-1.596 0C10.043 28.881 10.043 29.31 10.043 29.73zM10.043 38.23c.54-.025 1.068-.05 1.595-.076 0-.459 0-.889 0-1.346-.54.024-1.068.049-1.595.073C10.043 37.345 10.043 37.776 10.043 38.23zM13.688 33.43c-.553 0-1.082 0-1.608 0 0 .463 0 .898 0 1.306.547 0 1.076 0 1.608 0C13.688 34.277 13.688 33.854 13.688 33.43zM10.042 12.835c.543 0 1.07 0 1.591 0 0-.426 0-.862 0-1.331-.538 0-1.058 0-1.591 0C10.042 11.92 10.042 12.35 10.042 12.835zM12.073 31.379c.553 0 1.081 0 1.61 0 0-.459 0-.887 0-1.31-.542 0-1.071 0-1.61 0C12.073 30.522 12.073 30.95 12.073 31.379zM11.639 31.791c-.539 0-1.065 0-1.594 0 0 .471 0 .907 0 1.317.541 0 1.068 0 1.594 0C11.639 32.638 11.639 32.209 11.639 31.791zM16.163 38.066c.557 0 1.085 0 1.608 0 0-.445 0-.873 0-1.317-.544 0-1.073 0-1.608 0C16.163 37.19 16.163 37.62 16.163 38.066zM14.123 36.751c0 .463 0 .89 0 1.313.545 0 1.074 0 1.608 0 0-.448 0-.877 0-1.313C15.193 36.751 14.664 36.751 14.123 36.751zM11.639 34.808c0-.482 0-.91 0-1.317-.539 0-1.066 0-1.596 0 0 .47 0 .898 0 1.317C10.578 34.808 11.099 34.808 11.639 34.808zM12.077 14.939c0 .439 0 .867 0 1.32.544 0 1.072 0 1.609 0 0-.434 0-.863 0-1.32C13.148 14.939 12.618 14.939 12.077 14.939zM10.04 14.518c.544 0 1.065 0 1.596 0 0-.423 0-.857 0-1.323-.541 0-1.067 0-1.596 0C10.04 13.627 10.04 14.049 10.04 14.518zM11.633 19.592c0-.447 0-.881 0-1.336-.54 0-1.062 0-1.583 0 0 .45 0 .885 0 1.336C10.584 19.592 11.1 19.592 11.633 19.592zM13.69 26.709c-.551 0-1.081 0-1.618 0 0 .448 0 .877 0 1.305.545 0 1.078 0 1.618 0C13.69 27.565 13.69 27.143 13.69 26.709zM12.078 11.577c0 .427 0 .862 0 1.323.544 0 1.071 0 1.609 0 0-.43 0-.859 0-1.323C13.152 11.577 12.623 11.577 12.078 11.577zM10.051 30.097c0 .48 0 .915 0 1.329.541 0 1.062 0 1.587 0 0-.469 0-.903 0-1.329C11.102 30.097 10.581 30.097 10.051 30.097zM12.073 38.097c.551 0 1.08 0 1.61 0 0-.464 0-.893 0-1.306-.542 0-1.07 0-1.61 0C12.073 37.25 12.073 37.679 12.073 38.097zM13.69 38.47c-.55 0-1.079 0-1.61 0 0 .47 0 .906 0 1.314.548 0 1.076 0 1.61 0C13.69 39.319 13.69 38.895 13.69 38.47zM12.073 36.419c.546 0 1.08 0 1.608 0 0-.465 0-.894 0-1.31-.544 0-1.072 0-1.608 0C12.073 35.571 12.073 36 12.073 36.419zM15.73 16.635c-.548 0-1.076 0-1.61 0 0 .441 0 .869 0 1.317.541 0 1.07 0 1.61 0C15.73 17.52 15.73 17.09 15.73 16.635zM13.681 17.939c0-.45 0-.877 0-1.324-.544 0-1.073 0-1.6 0 0 .442 0 .877 0 1.324C12.624 17.939 13.146 17.939 13.681 17.939zM14.121 23.342c0 .45 0 .877 0 1.31.543 0 1.071 0 1.609 0 0-.44 0-.868 0-1.31C15.192 23.342 14.664 23.342 14.121 23.342zM16.168 38.427c0 .443 0 .87 0 1.314.545 0 1.073 0 1.603 0 0-.445 0-.874 0-1.314C17.233 38.427 16.71 38.427 16.168 38.427zM16.162 9.564c.557 0 1.087 0 1.607 0 0-.451 0-.88 0-1.296-.548 0-1.078 0-1.607 0C16.162 8.713 16.162 9.136 16.162 9.564zM13.681 21.294c0-.441 0-.876 0-1.317-.544 0-1.072 0-1.607 0 0 .445 0 .874 0 1.317C12.613 21.294 13.143 21.294 13.681 21.294zM14.122 30.05c0 .454 0 .883 0 1.31.545 0 1.075 0 1.605 0 0-.447 0-.876 0-1.31C15.189 30.05 14.664 30.05 14.122 30.05z" /><path fill="#2196F3" d="M34.399 6.059c0-.55-.004-1.06.006-1.57.001-.051.079-.132.133-.146C35.017 4.223 35.5 4.117 36.012 4c0 .551.002 1.09-.004 1.628 0 .037-.057.097-.097.105C35.423 5.843 34.934 5.945 34.399 6.059zM36.013 44c-.522-.12-1.019-.23-1.513-.352-.043-.01-.095-.1-.096-.153-.008-.503-.004-1.005-.004-1.545.19.037.359.07.528.104.31.064.621.126.929.201.059.015.149.084.15.13C36.017 42.917 36.013 43.45 36.013 44zM33.996 6.141c-.526.1-1.047.199-1.608.306 0-.37 0-.718 0-1.068 0-.579 0-.58.552-.697.347-.074.695-.143 1.056-.217C33.996 5.02 33.996 5.56 33.996 6.141zM32.388 41.555c.556.105 1.078.203 1.608.303 0 .563 0 1.11 0 1.677-.513-.104-1.013-.203-1.511-.313-.04-.009-.092-.085-.093-.13C32.386 42.597 32.388 42.101 32.388 41.555zM30.389 6.784c0-.523-.002-1.017.003-1.511.001-.042.044-.112.077-.119.5-.096 1.001-.183 1.531-.277 0 .53.004 1.032-.007 1.534-.001.046-.091.119-.148.13C31.376 6.626 30.902 6.7 30.389 6.784zM29.993 41.153c0 .549 0 1.067 0 1.611-.536-.084-1.059-.167-1.6-.252 0-.523 0-1.046 0-1.59C28.927 40.999 29.452 41.075 29.993 41.153zM24.313 7.538c0-.522 0-1.021 0-1.544.532-.058 1.064-.117 1.631-.178 0 .503.003.987-.004 1.47-.001.035-.062.096-.099.1C25.337 7.442 24.832 7.489 24.313 7.538zM23.902 41.965c-.555-.047-1.083-.091-1.622-.137 0-.517 0-1.009 0-1.532.38.03.747.056 1.114.091.508.049.507.052.507.569C23.902 41.286 23.902 41.615 23.902 41.965zM23.889 6.033c0 .524 0 1.024 0 1.544-.538.041-1.065.082-1.607.123 0-.517 0-1.01 0-1.528C22.809 6.127 23.336 6.081 23.889 6.033zM26.349 42.233c0-.53 0-1.031 0-1.564.539.065 1.066.129 1.604.193 0 .53 0 1.045 0 1.584C27.414 42.375 26.887 42.304 26.349 42.233zM27.953 5.552c0 .53 0 1.046 0 1.585-.528.064-1.055.128-1.599.194 0-.525 0-1.032 0-1.564C26.877 5.697 27.407 5.625 27.953 5.552zM20.245 6.296c.545-.03 1.069-.06 1.609-.09 0 .51 0 1.003 0 1.523-.528.031-1.058.063-1.609.095C20.245 7.313 20.245 6.817 20.245 6.296zM21.857 40.269c0 .516 0 1.007 0 1.525-.253-.012-.504-.024-.754-.037-.239-.013-.478-.018-.716-.046-.059-.007-.156-.086-.157-.135-.012-.453-.007-.907-.007-1.392C20.775 40.212 21.303 40.239 21.857 40.269zM16.165 41.594c0-.527 0-1.01 0-1.494.543 0 1.071 0 1.609 0 0 .515 0 1.006 0 1.494C17.234 41.594 16.706 41.594 16.165 41.594zM18.205 41.645c0-.531 0-1.017 0-1.496.537 0 1.065 0 1.607 0 0 .519 0 1.003 0 1.496C19.285 41.645 18.757 41.645 18.205 41.645zM17.774 7.898c-.536 0-1.06 0-1.603 0 0-.485 0-.975 0-1.49.532 0 1.061 0 1.603 0C17.774 6.893 17.774 7.378 17.774 7.898zM14.117 7.897c0-.505 0-.991 0-1.494.534 0 1.063 0 1.607 0 0 .509 0 .999 0 1.494C15.188 7.897 14.658 7.897 14.117 7.897zM36.006 8.006c0 .523 0 1.009 0 1.518-.524.089-1.045.177-1.588.269 0-.503 0-.977 0-1.487C34.929 8.209 35.456 8.11 36.006 8.006zM34.399 38.205c.553.093 1.068.179 1.598.269 0 .497 0 .988 0 1.515-.318-.058-.632-.112-.945-.173-.211-.041-.507-.024-.606-.157-.11-.146-.042-.433-.046-.659C34.396 38.749 34.399 38.498 34.399 38.205zM37.997 38.845c0 .528 0 1.03 0 1.556-.529-.11-1.047-.217-1.571-.325 0-.51 0-1.003 0-1.523C36.954 38.65 37.468 38.746 37.997 38.845zM36.43 9.45c0-.517 0-1.01 0-1.525.516-.108 1.035-.217 1.565-.327 0 .516 0 1.017 0 1.554C37.484 9.25 36.965 9.349 36.43 9.45zM37.994 5.649c0 .539 0 1.041 0 1.553-.521.111-1.033.221-1.576.337 0-.494-.002-.97.004-1.448.001-.036.057-.091.097-.101C37.006 5.873 37.495 5.763 37.994 5.649zM32.397 10.101c0-.503 0-.971 0-1.457.529-.088 1.052-.174 1.594-.264 0 .498 0 .98 0 1.482C33.47 9.939 32.947 10.018 32.397 10.101zM33.989 39.619c-.539-.09-1.058-.175-1.588-.263 0-.486 0-.962 0-1.457.534.08 1.052.158 1.588.238C33.989 38.624 33.989 39.108 33.989 39.619zM33.994 41.482c-.54-.101-1.063-.197-1.594-.297 0-.484 0-.96 0-1.457.538.091 1.06.18 1.594.27C33.994 40.495 33.994 40.978 33.994 41.482zM33.996 6.519c0 .493 0 .977 0 1.481-.529.09-1.052.179-1.608.274 0-.473-.003-.919.006-1.363.001-.041.081-.106.133-.116C33.012 6.697 33.499 6.61 33.996 6.519zM25.931 40.27c-.55-.054-1.078-.105-1.618-.157 0-.451 0-.889 0-1.364.536.047 1.07.094 1.618.142C25.931 39.345 25.931 39.789 25.931 40.27zM24.307 38.399c0-.462 0-.892 0-1.362.35.024.692.048 1.034.072.046.003.091.014.138.018.468.044.469.044.468.534 0 .267-.002.534-.004.801 0 .015-.009.029-.024.073C25.393 38.491 24.86 38.446 24.307 38.399zM8.013 11.349c.537.03 1.064.06 1.605.09 0 .452 0 .89 0 1.356-.536-.029-1.064-.057-1.605-.087C8.013 12.25 8.013 11.814 8.013 11.349zM8.012 38.367c0-.469 0-.906 0-1.363.539-.034 1.066-.068 1.607-.103 0 .457 0 .893 0 1.352C9.085 38.291 8.558 38.329 8.012 38.367zM8.001 14.809c.55 0 1.072 0 1.613 0 0 .478 0 .92 0 1.328-.504 0-.996.003-1.488-.004-.042-.001-.119-.066-.12-.103C7.998 15.616 8.001 15.202 8.001 14.809zM8.013 17.857c0-.487 0-.924 0-1.348.538 0 1.062 0 1.603 0 0 .472 0 .916 0 1.348C9.08 17.857 8.556 17.857 8.013 17.857zM9.621 35.203c0 .469 0 .898 0 1.353-.537.033-1.064.065-1.607.099 0-.456 0-.893 0-1.361C8.542 35.265 9.069 35.235 9.621 35.203zM9.621 19.914c0 .467 0 .897 0 1.347-.532 0-1.06 0-1.605 0 0-.461 0-.903 0-1.347C8.55 19.914 9.071 19.914 9.621 19.914zM9.623 26.75c0 .437 0 .859 0 1.319-.533 0-1.06 0-1.606 0 0-.415 0-.857 0-1.319C8.544 26.75 9.072 26.75 9.623 26.75zM8.012 29.777c0-.423 0-.859 0-1.327.536 0 1.064 0 1.606 0 0 .422 0 .857 0 1.327C9.082 29.777 8.554 29.777 8.012 29.777zM17.78 9.937c0 .439 0 .863 0 1.311-.533 0-1.061 0-1.609 0 0-.422 0-.856 0-1.311C16.7 9.937 17.229 9.937 17.78 9.937zM15.728 9.933c0 .46 0 .889 0 1.321-.542 0-1.07 0-1.611 0 0-.449 0-.877 0-1.321C14.654 9.933 15.183 9.933 15.728 9.933zM14.121 19.627c0-.438 0-.867 0-1.313.53 0 1.058 0 1.604 0 0 .433 0 .866 0 1.313C15.191 19.627 14.663 19.627 14.121 19.627zM14.118 29.685c0-.437 0-.866 0-1.314.54 0 1.069 0 1.611 0 0 .432 0 .862 0 1.314C15.2 29.685 14.672 29.685 14.118 29.685zM13.686 21.655c0 .452 0 .883 0 1.323-.539 0-1.07 0-1.612 0 0-.448 0-.877 0-1.323C12.609 21.655 13.139 21.655 13.686 21.655zM14.126 21.666c.531 0 1.06 0 1.603 0 0 .437 0 .866 0 1.312-.527 0-1.055 0-1.603 0C14.126 22.548 14.126 22.114 14.126 21.666zM10.043 21.277c0-.453 0-.883 0-1.323.532 0 1.06 0 1.598 0 0 .454 0 .884 0 1.323C11.111 21.277 10.583 21.277 10.043 21.277zM13.683 25.027c0 .444 0 .874 0 1.318-.542 0-1.072 0-1.612 0 0-.44 0-.87 0-1.318C12.606 25.027 13.136 25.027 13.683 25.027zM15.736 25.023c0 .447 0 .87 0 1.311-.533 0-1.061 0-1.609 0 0-.429 0-.863 0-1.311C14.655 25.023 15.185 25.023 15.736 25.023zM11.645 26.727c0 .434 0 .864 0 1.315-.534 0-1.06 0-1.601 0 0-.428 0-.857 0-1.315C10.568 26.727 11.094 26.727 11.645 26.727zM11.639 24.671c-.53 0-1.052 0-1.591 0 0-.442 0-.876 0-1.328.527 0 1.053 0 1.591 0C11.639 23.786 11.639 24.223 11.639 24.671zM10.043 29.73c0-.42 0-.85 0-1.309.528 0 1.056 0 1.596 0 0 .418 0 .847 0 1.309C11.109 29.73 10.582 29.73 10.043 29.73zM10.043 38.23c0-.456 0-.885 0-1.349.528-.024 1.055-.048 1.595-.073 0 .457 0 .887 0 1.346C11.111 38.18 10.584 38.205 10.043 38.23zM13.688 33.43c0 .423 0 .846 0 1.306-.533 0-1.061 0-1.608 0 0-.407 0-.843 0-1.306C12.606 33.43 13.135 33.43 13.688 33.43zM10.042 12.835c0-.485 0-.915 0-1.331.533 0 1.053 0 1.591 0 0 .47 0 .905 0 1.331C11.112 12.835 10.586 12.835 10.042 12.835zM12.073 31.379c0-.429 0-.857 0-1.31.539 0 1.068 0 1.61 0 0 .423 0 .85 0 1.31C13.153 31.379 12.626 31.379 12.073 31.379zM11.639 31.791c0 .417 0 .846 0 1.317-.526 0-1.052 0-1.594 0 0-.41 0-.845 0-1.317C10.573 31.791 11.1 31.791 11.639 31.791zM16.163 38.066c0-.447 0-.876 0-1.317.535 0 1.064 0 1.608 0 0 .444 0 .872 0 1.317C17.248 38.066 16.721 38.066 16.163 38.066zM14.123 36.751c.541 0 1.07 0 1.608 0 0 .436 0 .864 0 1.313-.534 0-1.063 0-1.608 0C14.123 37.643 14.123 37.215 14.123 36.751zM11.639 34.808c-.539 0-1.062 0-1.596 0 0-.418 0-.848 0-1.317.529 0 1.057 0 1.596 0C11.639 33.897 11.639 34.326 11.639 34.808zM12.077 14.939c.541 0 1.07 0 1.609 0 0 .456 0 .885 0 1.32-.537 0-1.065 0-1.609 0C12.077 15.807 12.077 15.378 12.077 14.939zM10.04 14.518c0-.469 0-.891 0-1.323.529 0 1.055 0 1.596 0 0 .465 0 .899 0 1.323C11.105 14.518 10.584 14.518 10.04 14.518zM11.633 19.592c-.532 0-1.049 0-1.583 0 0-.45 0-.886 0-1.336.522 0 1.043 0 1.583 0C11.633 18.71 11.633 19.145 11.633 19.592zM13.69 26.709c0 .434 0 .856 0 1.305-.539 0-1.073 0-1.618 0 0-.429 0-.857 0-1.305C12.609 26.709 13.137 26.709 13.69 26.709zM12.078 11.577c.545 0 1.074 0 1.609 0 0 .463 0 .892 0 1.323-.537 0-1.065 0-1.609 0C12.078 12.439 12.078 12.004 12.078 11.577zM10.051 30.097c.53 0 1.052 0 1.587 0 0 .425 0 .86 0 1.329-.524 0-1.046 0-1.587 0C10.051 31.011 10.051 30.576 10.051 30.097zM12.073 38.097c0-.417 0-.846 0-1.306.539 0 1.068 0 1.61 0 0 .413 0 .842 0 1.306C13.153 38.097 12.625 38.097 12.073 38.097zM13.69 38.47c0 .425 0 .85 0 1.314-.534 0-1.062 0-1.61 0 0-.408 0-.843 0-1.314C12.611 38.47 13.14 38.47 13.69 38.47zM12.073 36.419c0-.419 0-.848 0-1.31.535 0 1.064 0 1.608 0 0 .416 0 .844 0 1.31C13.153 36.419 12.619 36.419 12.073 36.419zM15.73 16.635c0 .456 0 .884 0 1.317-.54 0-1.069 0-1.61 0 0-.448 0-.876 0-1.317C14.653 16.635 15.182 16.635 15.73 16.635zM13.681 17.939c-.534 0-1.057 0-1.6 0 0-.448 0-.882 0-1.324.526 0 1.055 0 1.6 0C13.681 17.062 13.681 17.49 13.681 17.939zM14.121 23.342c.542 0 1.07 0 1.609 0 0 .443 0 .87 0 1.31-.538 0-1.066 0-1.609 0C14.121 24.219 14.121 23.791 14.121 23.342zM16.168 38.427c.541 0 1.064 0 1.603 0 0 .441 0 .869 0 1.314-.53 0-1.058 0-1.603 0C16.168 39.297 16.168 38.87 16.168 38.427zM16.162 9.564c0-.428 0-.851 0-1.296.528 0 1.058 0 1.607 0 0 .416 0 .844 0 1.296C17.249 9.564 16.72 9.564 16.162 9.564zM13.681 21.294c-.539 0-1.068 0-1.607 0 0-.443 0-.873 0-1.317.535 0 1.064 0 1.607 0C13.681 20.418 13.681 20.853 13.681 21.294zM14.122 30.05c.543 0 1.067 0 1.605 0 0 .435 0 .863 0 1.31-.53 0-1.06 0-1.605 0C14.122 30.932 14.122 30.503 14.122 30.05z" /><path fill="#2196F3" d="M39.938,30.085c-0.1-1.012-0.364-1.973-0.869-2.863c-0.157-0.277-0.321-0.44-0.663-0.407c-0.282,0.027-0.571-0.019-0.857-0.032c-0.368-0.017-0.736-0.034-1.117-0.052c0-0.561-0.009-1.096,0.005-1.63c0.004-0.166-0.052-0.245-0.197-0.289c-0.636-0.191-1.269-0.399-1.91-0.573c-0.369-0.1-0.753-0.145-1.14-0.217c0-0.19,0-0.363,0-0.536c0-0.619,0.001-0.616,0.583-0.822c1.011-0.357,2.011-0.734,2.868-1.415c0.958-0.762,1.647-1.723,2.053-2.886c0.368-1.05,0.4-2.143,0.322-3.242c-0.06-0.843-0.249-1.658-0.64-2.411c-0.306-0.59-0.746-1.066-1.306-1.412c-1.188-0.733-2.496-0.93-3.859-0.853c-0.398,0.023-0.797,0.05-1.201,0.075c-0.008-0.137-0.015-0.25-0.021-0.369c-0.533,0.068-1.041,0.132-1.558,0.197c0-0.488,0-0.935,0-1.395c0.525-0.079,1.042-0.157,1.56-0.236c0-0.621,0-1.217,0-1.807c-1.887,0.267-3.765,0.533-5.659,0.801c0,1.143,0,2.283,0,3.463c-1.185,0.054-2.356,0.108-3.541,0.162c0-0.477,0-0.923,0-1.382c0.509-0.03,1.007-0.058,1.499-0.086c0-0.683,0-1.33,0-1.95c-2.041,0.114-4.06,0.228-6.102,0.342c0,1.107,0,2.205,0,3.327c-1.367,0-2.711,0-4.068,0c0,0.57,0,1.116,0,1.704c0.535,0,1.057,0,1.582,0c0,0.47,0,0.897,0,1.317c-0.541,0-1.064,0-1.578,0c0,0.56,0,1.107,0,1.678c0.68,0,1.342,0,2.036,0c0,1.805,0,3.587,0,5.39c0.538,0,1.046,0,1.555,0c0,0.442,0,0.861,0,1.304c-0.524,0-1.032,0-1.55,0c0,0.69,0,1.354,0,2.05c0.526,0,1.039,0,1.557,0c0,0.444,0,0.859,0,1.305c-0.523,0-1.037,0-1.577,0c0,1.806,0,3.582,0,5.38c-0.691,0-1.353,0-2.02,0c0,1.146,0,2.268,0,3.39c0.524,0,1.032,0,1.571,0c0,0.431,0,0.85,0,1.303c0.848,0,1.666,0,2.512,0c0,1.14,0,2.245,0,3.343c1.379,0.062,2.728,0.123,4.112,0.184c0-0.432,0-0.851,0-1.287c0.54,0.048,1.046,0.092,1.578,0.139c0-0.72,0-1.417,0-2.141c0.828,0.064,1.627,0.126,2.448,0.19c0,1.17,0,2.316,0,3.445c1.896,0.268,3.769,0.533,5.662,0.801c0-1.202,0-2.396,0-3.613c0.339,0.024,0.64,0.046,0.94,0.068c1.039,0.074,2.069,0.06,3.086-0.217c1.876-0.51,3.151-1.643,3.664-3.588C40.015,32.537,40.059,31.316,39.938,30.085z M36.449,13.411c0.5-0.075,1.008-0.15,1.545-0.23c0,0.527,0,1.036,0,1.572c-0.507,0.063-1.017,0.127-1.545,0.193C36.449,14.433,36.449,13.936,36.449,13.411z M36.443,17.338c0.515-0.049,1.02-0.097,1.544-0.147c0,0.521,0,1.034,0,1.575c-0.506,0.034-1.017,0.069-1.544,0.104C36.443,18.338,36.443,17.845,36.443,17.338z M20.265,13.148c0.538-0.027,1.058-0.052,1.592-0.078c0,0.456,0,0.884,0,1.336c-0.533,0.024-1.054,0.049-1.592,0.073C20.265,14.031,20.265,13.603,20.265,13.148z M21.232,18.325c0,0.423,0,0.842,0,1.281c-0.517,0-1.038,0-1.577,0c0-0.417,0-0.836,0-1.281C20.182,18.325,20.698,18.325,21.232,18.325z M18.24,13.209c0.526,0,1.04,0,1.569,0l0,0c0,0.407,0,0.835,0,1.297l0,0c-0.523,0-1.038,0-1.569,0C18.24,14.102,18.24,13.674,18.24,13.209z M17.374,17.939L17.374,17.939c0-0.435,0-0.857,0-1.292l0,0c0.524,0,1.046,0,1.584,0c0,0.437,0,0.857,0,1.292C18.419,17.939,17.902,17.939,17.374,17.939z M17.777,34.733c-0.527,0-1.047,0-1.582,0l0,0c0-0.413,0-0.841,0-1.296l0,0c0.525,0,1.04,0,1.582,0C17.777,33.858,17.777,34.279,17.777,34.733z M19.409,31.353L19.409,31.353c-0.533,0-1.054,0-1.589,0l0,0c0-0.421,0-0.842,0-1.284l0,0c0.525,0,1.045,0,1.589,0l0,0C19.409,30.495,19.409,30.916,19.409,31.353z M19.41,29.671c-0.53,0-1.051,0-1.588,0l0,0c0-0.418,0-0.838,0-1.283l0,0c0.527,0,1.047,0,1.588,0C19.41,28.818,19.41,29.233,19.41,29.671z M19.461,23.347c0.521,0,1.041,0,1.573,0c0,0.431,0,0.86,0,1.303c-0.52,0-1.034,0-1.573,0C19.461,24.213,19.461,23.79,19.461,23.347z M21.863,38.056c-0.528,0-1.055,0-1.595,0c0-0.434,0-0.848,0-1.283c0.528,0,1.054,0,1.595,0C21.863,37.198,21.863,37.62,21.863,38.056z M23.242,15.501c0.135-0.009,4.416-0.225,4.932-0.239c3.339-0.086,3.249,1.373,3.273,2.435c0.044,1.949-0.755,3.702-4.77,4.017c-0.136,0.01-3.388,0.149-3.435,0.149C23.242,19.736,23.242,17.628,23.242,15.501z M25.98,34.928L25.98,34.928L25.98,34.928c-0.263-0.012-1.308-0.062-1.575-0.074c0-0.437,0-0.872,0-1.285c0.521,0,1.042,0,1.575,0l0,0C25.98,34.039,25.98,34.469,25.98,34.928z M30.042,35.222c-0.39-0.03-1.44-0.114-1.574-0.124c0-0.449,0-0.89,0-1.36l0,0l0,0c0.4,0.029,0.789,0.056,1.181,0.083c0.131,0.01,0.262,0.018,0.393,0.028C30.042,34.308,30.042,34.75,30.042,35.222z M32.239,30.984c-0.097,0.371-0.37,1.762-3.593,1.758c-0.789-0.001-5.291-0.189-5.406-0.189l0,0l0,0c0-2.147,0-4.239,0-6.363c0.1,0,2.961,0.062,3.436,0.088c5.023,0.271,5.144,1.256,5.654,3.089C32.477,29.893,32.379,30.452,32.239,30.984z M37.993,32.81c-0.517-0.061-1.022-0.121-1.543-0.183c0-0.504,0-1.003,0-1.537c0.507,0.05,1.017,0.099,1.543,0.15C37.993,31.777,37.993,32.284,37.993,32.81z" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* Ruby */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#9B1010" d="M42 14L40 40 14 42z" /><path fill="#B71C1C" d="M28 28L40 40 42 14z" /><path fill="#C62828" d="M24 12.336A22.621 11.664 0 1 0 24 35.664A22.621 11.664 0 1 0 24 12.336Z" transform="rotate(-45.001 24 24)" /><path fill="#E53935" d="M10 17L17 10 25 6 31 10 28 19 19 27 10 30 6 24z" /><path fill="#FF5252" d="M31,10l-6-4h11L31,10z M42,15l-11-5l-3,9L42,15z M19,27l13.235,5.235L28,19L19,27z M10,30l4,12l5-15L10,30z M6,24v11l4-5L6,24z" /></svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* MySQL */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z" /><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z" /><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z" /><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z" /><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z" /><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z" /><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* Vite Compiler */}
                                    <button className="button">
                                        <svg viewBox="0 0 256 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-.828%" y1="7.652%" x2="57.636%" y2="78.411%" id="a"><stop stopColor="#41D1FF" offset="0%" /><stop stopColor="#BD34FE" offset="100%" /></linearGradient><linearGradient x1="43.376%" y1="2.242%" x2="50.316%" y2="89.03%" id="b"><stop stopColor="#FFEA83" offset="0%" /><stop stopColor="#FFDD35" offset="8.333%" /><stop stopColor="#FFA800" offset="100%" /></linearGradient></defs><path d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" fill="url(#a)" /><path d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z" fill="url(#b)" /></svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className='button'>
                                        {/* VS Code */}
                                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z" fill="url(#paint0_linear_87_8101)" />
                                            <path d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z" fill="url(#paint1_linear_87_8101)" />
                                            <path d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z" fill="url(#paint2_linear_87_8101)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_87_8101" x1="23.79" y1="2" x2="23.79" y2="30" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#32B5F1" />
                                                    <stop offset="1" stopColor="#2B9FED" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_87_8101" x1="21.0018" y1="5.53398" x2="1.0217" y2="22.3051" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#0F6FB3" />
                                                    <stop offset="0.270551" stopColor="#1279B7" />
                                                    <stop offset="0.421376" stopColor="#1176B5" />
                                                    <stop offset="0.618197" stopColor="#0E69AC" />
                                                    <stop offset="0.855344" stopColor="#0F70AF" />
                                                    <stop offset="1" stopColor="#0F6DAD" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_87_8101" x1="1.15522" y1="9.98389" x2="21.0791" y2="26.4808" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#1791D2" />
                                                    <stop offset="1" stopColor="#1173C5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* Abobe Photoshop */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z" /><path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z" /><path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Figma */}
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="none" fillRule="evenodd" transform="translate(4)">
                                                <circle cx="12" cy="12" r="4" fill="#19BCFE" />
                                                <path fill="#09CF83" d="M4,24 C6.209139,24 8,22.209139 8,20 C8,19.3969461 8,18.0636128 8,16 C6.20303877,16 4.86970543,16 4,16 C1.790861,16 0,17.790861 0,20 C0,22.209139 1.790861,24 4,24 Z" />
                                                <path fill="#A259FF" d="M4,16 C4.73637967,16 6.069713,16 8,16 L8,8 C6.069713,8 4.73637967,8 4,8 C1.790861,8 0,9.790861 0,12 C0,14.209139 1.790861,16 4,16 Z" />
                                                <path fill="#F24E1E" d="M4,8 C4.73637967,8 6.069713,8 8,8 L8,0 C6.069713,0 4.73637967,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z" />
                                                <path fill="#FF7262" d="M12,8 L8,8 L8,8 L8,0 L12,0 L12,0 C14.209139,0 16,1.790861 16,4 C16,6.209139 14.209139,8 12,8 Z" />
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Docker */}
                                        <svg viewBox="0 -20.5 256 256" xmlns="http://www.w3.org/2000/svg">

                                            <g fill="none" fillRule="evenodd">

                                                <path d="M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732" fill="#364548" />

                                                <path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196" fill="#22A0C8" />

                                                <path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436" fill="#37B1D9" />

                                                <path d="M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645" fill="#1B81A5" />

                                                <path d="M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367" fill="#1D91B4" />

                                                <path d="M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z" fill="#23A3C2" />

                                                <path d="M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z" fill="#34BBDE" />

                                                <path d="M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2" />

                                                <path d="M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#34BBDE" />

                                                <path d="M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z" fill="#23A3C2" />

                                                <path d="M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z" fill="#34BBDE" />

                                                <path d="M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2" />

                                                <path d="M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935" fill="#D3ECEC" />

                                                <path d="M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163" fill="#364548" />

                                                <path d="M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118" fill="#BDD9D7" />

                                                <path d="M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05" fill="#D3ECEC" />
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Postman */}
                                        <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                                            <g>
                                                <path d="M254.953118,144.253071 C263.911504,74.1217108 214.38443,10.0052669 144.381048,1.04688158 C74.3776647,-7.9115038 10.0052669,41.6155696 1.04688158,111.618952 C-7.9115038,181.622335 41.6155696,245.866756 111.618952,254.953118 C181.750312,263.911504 245.866756,214.38443 254.953118,144.253071 Z" fill="#FF6C37">
                                                </path>
                                                <g transform="translate(50.181225, 45.198924)">
                                                    <path d="M124.018448,36.9853339 L70.012182,90.9916 L54.7829269,75.7623449 C107.893354,22.6519173 113.140409,27.2590869 124.018448,36.9853339 L124.018448,36.9853339 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M70.012182,92.2713693 C69.6282512,92.2713693 69.3722974,92.1433924 69.1163435,91.8874385 L53.7591114,76.6581834 C53.2472037,76.1462757 53.2472037,75.3784141 53.7591114,74.8665063 C107.765378,20.8602402 113.396363,25.9793176 124.78631,36.2174723 C125.042264,36.4734262 125.170241,36.72938 125.170241,37.1133108 C125.170241,37.4972416 125.042264,37.7531955 124.78631,38.0091494 L70.7800436,91.8874385 C70.6520667,92.1433924 70.2681359,92.2713693 70.012182,92.2713693 Z M56.574604,75.7623449 L70.012182,89.1999229 L122.098794,37.1133108 C112.628501,28.6668332 106.229654,26.1072945 56.574604,75.7623449 L56.574604,75.7623449 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M85.497391,106.476809 L70.7800436,91.7594616 L124.78631,37.7531955 C139.247703,52.342566 117.619601,76.0182987 85.497391,106.476809 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M85.497391,107.756578 C85.1134602,107.756578 84.8575064,107.628601 84.6015525,107.372648 L69.8842051,92.6553001 C69.6282512,92.3993463 69.6282512,92.1433924 69.6282512,91.7594616 C69.6282512,91.3755308 69.7562282,91.1195769 70.012182,90.8636231 L124.018448,36.857357 C124.530356,36.3454492 125.298217,36.3454492 125.810125,36.857357 C129.137525,39.9288034 130.929203,44.2800191 130.801226,48.7592118 C130.545272,62.9646515 114.420178,81.0093992 86.5212065,107.372648 C86.1372757,107.628601 85.7533449,107.756578 85.497391,107.756578 L85.497391,107.756578 Z M72.5717207,91.7594616 C80.7622445,100.077962 84.2176217,103.405363 85.497391,104.685132 C106.997516,84.2088225 127.857756,63.2206053 127.985733,48.7592118 C128.11371,45.4318115 126.833941,42.1044113 124.658333,39.5448726 L72.5717207,91.7594616 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M55.0388808,76.1462757 L65.9169201,87.024315 C66.172874,87.2802689 66.172874,87.5362228 65.9169201,87.7921767 C65.7889432,87.9201536 65.7889432,87.9201536 65.6609663,87.9201536 L43.1370259,92.7832771 C41.9852335,92.911254 40.961418,92.1433924 40.7054642,90.9916 C40.5774872,90.3517153 40.8334411,89.7118307 41.2173719,89.3278999 L54.2710192,76.2742526 C54.526973,76.0182987 54.9109038,75.8903218 55.0388808,76.1462757 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M42.7530951,94.0630464 C40.8334411,94.0630464 39.4256948,92.5273232 39.4256948,90.6076692 C39.4256948,89.7118307 39.8096256,88.8159921 40.4495103,88.1761075 L53.5031576,75.1224602 C54.2710192,74.4825755 55.2948346,74.4825755 56.0626962,75.1224602 L66.9407356,86.0004996 C67.7085972,86.6403842 67.7085972,87.7921767 66.9407356,88.5600383 C66.6847817,88.8159921 66.4288279,88.9439691 66.0448971,89.071946 L43.5209567,93.9350695 C43.2650028,93.9350695 43.009049,94.0630464 42.7530951,94.0630464 L42.7530951,94.0630464 Z M54.65495,77.5540219 L42.1132104,90.0957615 C41.8572566,90.3517153 41.7292796,90.7356461 41.9852335,91.1195769 C42.1132104,91.5035077 42.4971412,91.6314847 42.881072,91.5035077 L63.9972661,86.8963381 L54.65495,77.5540219 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M152.557304,7.03873136 C144.366781,-0.895838537 131.185156,-0.639884669 123.250587,7.67861603 C115.316017,15.9971167 115.57197,29.050764 123.890471,36.9853339 C130.673249,43.5121575 140.911403,44.6639499 148.97395,39.8008264 L134.38458,25.211456 L152.557304,7.03873136 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M138.223888,44.0240653 C126.066079,44.0240653 116.211855,34.1698413 116.211855,22.0120326 C116.211855,9.85422391 126.066079,-1.81866161e-14 138.223888,-1.81866161e-14 C143.854873,-1.81866161e-14 149.357881,2.17560788 153.453143,6.14289283 C153.709097,6.39884669 153.837074,6.65480056 153.837074,7.03873136 C153.837074,7.42266217 153.709097,7.67861603 153.453143,7.9345699 L136.176257,25.211456 L149.741812,38.777011 C150.25372,39.2889187 150.25372,40.0567803 149.741812,40.568688 C149.613835,40.696665 149.613835,40.696665 149.485858,40.8246419 C146.158458,42.8722729 142.191173,44.0240653 138.223888,44.0240653 Z M138.223888,2.68751561 C127.473825,2.68751561 118.771394,11.3899471 118.899371,22.1400096 C118.899371,32.890072 127.601802,41.5925035 138.351865,41.4645266 C141.295334,41.4645266 144.238804,40.8246419 146.926319,39.4168956 L133.488741,26.1072945 C133.232787,25.8513406 133.10481,25.5953868 133.10481,25.211456 C133.10481,24.8275252 133.232787,24.5715713 133.488741,24.3156174 L150.63765,7.1667083 C147.182273,4.22323882 142.831057,2.68751561 138.223888,2.68751561 L138.223888,2.68751561 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M152.941235,7.42266217 L152.685281,7.1667083 L134.38458,25.211456 L148.845973,39.6728495 C150.25372,38.777011 151.661466,37.7531955 152.813258,36.6014031 C161.003782,28.5388563 161.003782,15.485209 152.941235,7.42266217 L152.941235,7.42266217 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M148.97395,41.0805958 C148.590019,41.0805958 148.334066,40.9526188 148.078112,40.696665 L133.488741,26.1072945 C133.232787,25.8513406 133.10481,25.5953868 133.10481,25.211456 C133.10481,24.8275252 133.232787,24.5715713 133.488741,24.3156174 L151.661466,6.14289283 C152.173374,5.63098509 152.941235,5.63098509 153.453143,6.14289283 L153.837074,6.39884669 C162.411528,14.9733013 162.411528,28.7948101 153.965051,37.4972416 C152.685281,38.777011 151.277535,39.9288034 149.741812,40.8246419 C149.357881,40.9526188 149.101927,41.0805958 148.97395,41.0805958 L148.97395,41.0805958 Z M136.176257,25.211456 L149.101927,38.1371263 C150.125743,37.4972416 151.149558,36.6014031 151.91742,35.8335415 C159.212105,28.5388563 159.596036,16.6370014 152.557304,8.95838537 L136.176257,25.211456 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M126.194056,39.2889187 C123.12261,36.2174723 118.131509,36.2174723 115.060063,39.2889187 L66.8127587,87.5362228 L74.8753055,95.5987696 L125.938102,50.8068428 C129.265502,47.9913502 129.521456,43.0002498 126.705964,39.6728495 C126.45001,39.5448726 126.322033,39.4168956 126.194056,39.2889187 L126.194056,39.2889187 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M74.7473286,96.878539 C74.3633978,96.878539 74.1074439,96.750562 73.85149,96.4946082 L65.7889432,88.4320613 C65.2770355,87.9201536 65.2770355,87.152292 65.7889432,86.6403842 L114.036247,38.3930802 C117.619601,34.809726 123.378563,34.809726 126.961918,38.3930802 C130.545272,41.9764343 130.545272,47.7353963 126.961918,51.3187505 C126.833941,51.4467274 126.705964,51.5747044 126.577987,51.7026813 L75.5151902,96.4946082 C75.3872133,96.750562 75.1312594,96.878539 74.7473286,96.878539 L74.7473286,96.878539 Z M68.6044358,87.5362228 L74.8753055,93.8070925 L125.042264,49.7830273 C127.857756,47.4794425 128.11371,43.2562037 125.810125,40.4407111 C123.50654,37.6252186 119.283302,37.3692647 116.467809,39.6728495 C116.339832,39.8008264 116.211855,39.9288034 115.955901,40.0567803 L68.6044358,87.5362228 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M29.8274248,142.438327 C29.3155171,142.694281 29.0595632,143.206189 29.1875401,143.718097 L31.363148,152.932436 C31.8750557,154.212205 31.1071941,155.747929 29.6994479,156.131859 C28.6756324,156.51579 27.52384,156.131859 26.8839553,155.363998 L12.8064926,141.414512 L58.7502118,95.4707927 L74.6193516,95.7267466 L85.3694141,106.476809 C82.8098754,108.652417 67.3246664,123.625718 29.8274248,142.438327 L29.8274248,142.438327 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M28.8036093,157.411629 C27.7797938,157.411629 26.7559784,157.027698 26.1160937,156.259836 L12.1666079,142.31035 C11.910654,142.054397 11.7826771,141.798443 11.7826771,141.414512 C11.7826771,141.030581 11.910654,140.774627 12.1666079,140.518673 L58.1103272,94.5749541 C58.366281,94.3190003 58.7502118,94.1910233 59.0061657,94.1910233 L74.8753055,94.4469772 C75.2592363,94.4469772 75.5151902,94.5749541 75.7711441,94.830908 L86.5212065,105.58097 C86.7771604,105.836924 86.9051373,106.220855 86.9051373,106.604786 C86.9051373,106.988717 86.7771604,107.244671 86.3932296,107.500624 L85.497391,108.268486 C71.931836,120.170341 53.5031576,132.072196 30.5952864,143.462143 L32.7708943,152.548505 C33.1548251,154.212205 32.3869635,156.003882 30.8512403,156.899721 C30.0833787,157.283652 29.443494,157.411629 28.8036093,157.411629 Z M14.7261466,141.414512 L27.9077708,154.468159 C28.2917016,155.108044 29.0595632,155.363998 29.6994479,154.980067 C30.3393325,154.596136 30.5952864,153.828275 30.2113556,153.18839 L28.0357477,143.974051 C27.7797938,142.822258 28.2917016,141.798443 29.3155171,141.286535 C51.9674343,129.896588 70.2681359,118.12271 83.705714,106.476809 L74.2354208,97.0065159 L59.5180734,96.750562 L14.7261466,141.414512 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M1.9284532,152.420528 L12.9344695,141.414512 L29.3155171,157.795559 L3.20822254,156.003882 C2.05643013,155.875905 1.28856853,154.85209 1.41654546,153.700298 C1.41654546,153.18839 1.5445224,152.676482 1.9284532,152.420528 L1.9284532,152.420528 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M29.3155171,158.947352 L3.0802456,157.155675 C1.16059159,157.027698 -0.119177745,155.363998 0.00879918845,153.444344 C0.136776122,152.676482 0.39272999,151.908621 1.03261466,151.396713 L12.038631,140.390696 C12.5505387,139.878789 13.3184003,139.878789 13.830308,140.390696 L30.2113556,156.771744 C30.5952864,157.155675 30.7232633,157.667583 30.4673095,158.17949 C30.2113556,158.691398 29.8274248,158.947352 29.3155171,158.947352 L29.3155171,158.947352 Z M12.9344695,143.206189 L2.82429173,153.316367 C2.44036093,153.572321 2.44036093,154.212205 2.82429173,154.468159 C2.95226867,154.596136 3.0802456,154.724113 3.33619947,154.724113 L25.9881168,156.259836 L12.9344695,143.206189 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M54.2710192,101.357732 C53.5031576,101.357732 52.9912498,100.717847 52.9912498,100.077962 C52.9912498,99.6940315 53.1192268,99.4380776 53.3751806,99.1821238 L65.7889432,86.7683612 C66.3008509,86.2564534 67.0687125,86.2564534 67.5806203,86.7683612 L75.6431671,94.830908 C76.0270979,95.2148388 76.1550749,95.5987696 76.0270979,96.1106774 C75.899121,96.4946082 75.5151902,96.878539 75.0032825,97.0065159 L54.526973,101.357732 C54.3989961,101.357732 54.2710192,101.357732 54.2710192,101.357732 L54.2710192,101.357732 Z M66.6847817,89.4558768 L58.2383041,97.9023544 L72.059813,94.9588849 L66.6847817,89.4558768 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M74.6193516,95.7267466 L60.5418889,98.798193 C59.5180734,99.0541468 58.494258,98.4142622 58.2383041,97.3904467 C58.1103272,96.750562 58.2383041,96.1106774 58.7502118,95.5987696 L66.5568048,87.7921767 L74.6193516,95.7267466 Z" fill="#FFFFFF">
                                                    </path>
                                                    <path d="M60.2859351,100.077962 C58.494258,100.077962 57.0865117,98.670216 57.0865117,96.878539 C57.0865117,95.9827004 57.4704425,95.2148388 57.9823502,94.5749541 L65.7889432,86.7683612 C66.3008509,86.2564534 67.0687125,86.2564534 67.5806203,86.7683612 L75.6431671,94.830908 C76.0270979,95.2148388 76.1550749,95.5987696 76.0270979,96.1106774 C75.899121,96.4946082 75.5151902,96.878539 75.0032825,97.0065159 L60.9258197,100.077962 C60.6698659,100.077962 60.413912,100.077962 60.2859351,100.077962 L60.2859351,100.077962 Z M66.6847817,89.4558768 L59.7740273,96.3666312 C59.5180734,96.6225851 59.5180734,96.878539 59.6460504,97.1344928 C59.7740273,97.3904467 60.0299812,97.5184236 60.413912,97.5184236 L72.1877899,94.9588849 L66.6847817,89.4558768 Z" fill="#FF6C37">
                                                    </path>
                                                    <path d="M153.069212,19.7084478 C152.813258,18.9405862 151.91742,18.5566554 151.149558,18.8126093 C150.381697,19.0685632 149.997766,19.9644017 150.25372,20.7322633 C150.25372,20.8602402 150.381697,20.9882172 150.381697,21.1161941 C151.149558,22.6519173 150.893604,24.5715713 149.869789,25.9793176 C149.357881,26.6192023 149.485858,27.5150408 149.997766,28.0269485 C150.63765,28.5388563 151.533489,28.4108793 152.045397,27.7709947 C153.965051,25.3394329 154.348981,22.2679865 153.069212,19.7084478 L153.069212,19.7084478 Z" fill="#FF6C37">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* Express */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" baseProfile="basic"><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLa" x1="30.982" x2="30.982" y1="21.203" y2="43.514" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff" /><stop offset="1" stopColor="#e6abff" /></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLa)" d="M45.758,32.346L56.964,47h-0.85c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684	C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.654L32.271,18h0.85c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377	C53.838,18.49,54.829,18,55.879,18h0.85L45.758,32.346z M28.527,40h0.638c0,0,0,0,0,0c-2.348,6.085-9.292,9.631-15.896,7.256	C8.215,45.437,5,40.444,5,35.073L5,29.5c0-7.29,6.273-13.143,13.705-12.443C25.182,17.667,30,23.361,30,29.866L30,34H19v0H7l0,1.109	c0,4.501,2.671,8.705,6.9,10.248c4.807,1.754,9.835-0.235,12.389-4.116C26.789,40.481,27.616,40,28.527,40z M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32z" /><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLb" x1="44.5" x2="44.5" y1="16" y2="49" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff" /><stop offset="1" stopColor="#c822ff" /></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLb)" d="M56.729,18L45.758,32.347L56.964,47h-0.85	c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.653L32.271,18h0.85	c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377C53.838,18.49,54.829,18,55.879,18H56.729 M60.776,16h-4.047h-0.85	c-1.663,0-3.258,0.788-4.268,2.109L44.5,27.408l-7.111-9.299C36.379,16.788,34.783,16,33.121,16h-0.85h-4.047l2.458,3.215	l10.042,13.132L30.447,45.785L27.989,49h4.047h0.85c1.663,0,3.258-0.789,4.268-2.109l7.346-9.606l7.346,9.606	C52.856,48.211,54.451,49,56.114,49h0.85h4.047l-2.458-3.215L48.276,32.346l10.042-13.132L60.776,16L60.776,16z" /><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLc" x1="17.54" x2="17.54" y1="15" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff" /><stop offset="1" stopColor="#c822ff" /></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLc)" d="M17.5,17c0.397,0,0.8,0.019,1.205,0.057	C25.182,17.667,30,23.361,30,29.866V34H19v0H7v1.109c0,4.501,2.671,8.705,6.9,10.248C15.1,45.796,16.314,46,17.5,46	c3.563,0,6.872-1.847,8.789-4.758C26.789,40.481,27.616,40,28.527,40h0.638c0,0,0,0,0,0c-1.847,4.785-6.535,8-11.665,8	c-1.394,0-2.82-0.237-4.231-0.745C8.215,45.437,5,40.444,5,35.073V29.5C5,22.607,10.607,17,17.5,17 M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32 M17.5,15L17.5,15c-3.868,0-7.508,1.509-10.249,4.251C4.51,21.992,3,25.632,3,29.5	v5.573c0,6.348,3.855,12,9.592,14.065C14.184,49.71,15.835,50,17.5,50c5.951,0,11.389-3.729,13.531-9.28l1.05-2.72l-2.915,0	l-0.638,0c-1.565,0-3.026,0.801-3.91,2.142C23.052,42.522,20.324,44,17.5,44c-0.986,0-1.967-0.175-2.915-0.521	C11.509,42.356,9.362,39.416,9.042,36H19l11,0l2,0v-2v-4.134c0-7.607-5.758-14.109-13.108-14.8C18.43,15.022,17.962,15,17.5,15	L17.5,15z M9,30v-0.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V30H9L9,30z" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Nodemon */}
                                        <svg viewBox="-18 0 292 292" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                                            <g>
                                                <path d="M120.946627,289.190209 C125.205015,291.651821 130.457791,291.651821 134.716179,289.190209 L248.797612,223.36 C253.063642,220.900299 255.689552,216.352478 255.689552,211.425433 L255.689552,79.6637612 C255.689552,74.7405373 253.062687,70.1955821 248.804299,67.7301493 L134.724776,1.84644776 C130.457791,-0.615164179 125.205015,-0.615164179 120.938985,1.84644776 L6.88907463,67.7301493 C2.62686567,70.1946269 0,74.7414925 0,79.6637612 L0,211.433075 C0,216.352478 2.62686567,220.899343 6.8919403,223.359045 L120.945672,289.189254" fill="#76D04B">
                                                </path>
                                                <path d="M201.701254,114.111045 L196.613731,111.183284 C204.437015,99.6441791 209.111881,82.295403 203.249672,56.358209 C203.249672,56.358209 190.048478,93.3568955 163.510448,92.1313433 L132.437015,74.2495522 C131.264955,73.5541493 129.951522,73.1959403 128.623761,73.1414925 L127.907343,73.1414925 C126.582448,73.1968955 125.270925,73.5551045 124.082627,74.2495522 L93.0063284,92.1313433 C66.4711642,93.3607164 53.265194,56.358209 53.265194,56.358209 C47.4001194,82.2944478 52.0826269,99.6432239 59.904,111.183284 L54.8174328,114.112 C52.2335522,115.601194 50.6268657,118.366567 50.6268657,121.383164 L50.7797015,228.714985 C50.7797015,230.212776 51.5553433,231.599761 52.8697313,232.328597 C54.1535522,233.104239 55.7430448,233.104239 57.0249552,232.328597 L98.1893731,208.757493 C100.794269,207.21003 102.37803,204.480955 102.37803,201.497791 L102.37803,151.355224 C102.37803,148.365373 103.961791,145.593313 106.555224,144.111761 L124.083582,134.01791 C125.389373,133.257552 126.818388,132.887881 128.277015,132.887881 C129.703164,132.887881 131.169433,133.257552 132.438925,134.016955 L149.961552,144.110806 C152.55594,145.591403 154.145433,148.364418 154.145433,151.353313 L154.145433,201.495881 C154.145433,204.479045 155.750209,207.229134 158.338866,208.755582 L199.492776,232.326687 C200.784239,233.100418 202.396657,233.100418 203.676657,232.326687 C204.951881,231.597851 205.754269,230.20991 205.754269,228.712119 L205.888,121.380299 C205.885134,118.361791 204.302328,115.596418 201.702209,114.109134 L201.701254,114.111045 Z" fill="#4F4D3F">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Google FireBase */}
                                        <svg viewBox="-47.5 0 351 351" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                                            <defs>
                                                <path d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z" id="path-1">
                                                </path>
                                                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-2">
                                                    <feGaussianBlur stdDeviation="17.5" in="SourceAlpha" result="shadowBlurInner1">
                                                    </feGaussianBlur>
                                                    <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1">
                                                    </feOffset>
                                                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1">
                                                    </feComposite>
                                                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0" type="matrix" in="shadowInnerInner1">
                                                    </feColorMatrix>
                                                </filter>
                                                <path d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z" id="path-3">
                                                </path>
                                                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-4">
                                                    <feGaussianBlur stdDeviation="3.5" in="SourceAlpha" result="shadowBlurInner1">

                                                    </feGaussianBlur>
                                                    <feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1">

                                                    </feOffset>
                                                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1">

                                                    </feComposite>
                                                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0" type="matrix" in="shadowInnerInner1">

                                                    </feColorMatrix>
                                                </filter>
                                            </defs>
                                            <g>
                                                <path d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z" fill="#FFC24A">
                                                </path>
                                                <g>
                                                    <use fill="#FFA712" fillRule="evenodd" xlinkHref="#path-1">
                                                    </use>
                                                    <use fill="#000000" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1">
                                                    </use>
                                                </g>
                                                <path d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z" fill="#F4BD62">
                                                </path>
                                                <g>
                                                    <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#path-3">
                                                    </use>
                                                    <use fill="#000000" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3">
                                                    </use>
                                                </g>
                                                <polygon fill="#F6820C" points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584">

                                                </polygon>
                                                <path d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268" fill="#FDE068">

                                                </path>
                                                <path d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z" fill="#FCCA3F">

                                                </path>
                                                <path d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z" fill="#EEAB37">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    <button className="button">
                                        {/* Python */}
                                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#327EBD" />
                                                    <stop offset="1" stopColor="#1565A7" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFDA4B" />
                                                    <stop offset="1" stopColor="#F9C600" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* C Language */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" clipRule="evenodd"><linearGradient id="9nBOzQEsA2vJDj4A8wbora" x1="22.48" x2="31.833" y1="19.823" y2="45.52" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3940a4" /><stop offset="1" stopColor="#293091" /></linearGradient><path fill="url(#9nBOzQEsA2vJDj4A8wbora)" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0	c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867	c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0	c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867	c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd" /><linearGradient id="9nBOzQEsA2vJDj4A8wborb" x1="16.43" x2="26.687" y1="3.382" y2="31.562" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7b83eb" /><stop offset="1" stopColor="#5961c3" /></linearGradient><path fill="url(#9nBOzQEsA2vJDj4A8wborb)" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836	c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331	c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14s-14-6.273-14-14	S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd" /><linearGradient id="9nBOzQEsA2vJDj4A8wborc" x1="31.031" x2="39.734" y1="12.865" y2="36.777" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5c65d6" /><stop offset=".999" stopColor="#464eb0" /></linearGradient><path fill="url(#9nBOzQEsA2vJDj4A8wborc)" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127	L23.593,24L42.485,13.205z" clipRule="evenodd" /><path d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9C15.729,9,9,15.729,9,24s6.729,15,15,15c5.367,0,10.36-2.908,13.03-7.59l0.503-0.882l-0.89-0.49 l-6.132-3.374l-0.851-0.468l-0.493,0.837C28.09,28.863,26.11,30,24,30c-3.308,0-6-2.692-6-6s2.692-6,6-6 c2.099,0,4.011,1.076,5.115,2.879l0.507,0.828l0.842-0.481l6.073-3.47l0.882-0.504l-0.518-0.874C34.205,11.827,29.262,9,24,9L24,9 z" opacity=".05" /><path d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9.5C16.005,9.5,9.5,16.005,9.5,24S16.005,38.5,24,38.5c5.188,0,10.014-2.812,12.595-7.337l0.252-0.441 l-0.445-0.245l-6.132-3.374l-0.425-0.234l-0.246,0.418C28.431,29.269,26.286,30.5,24,30.5c-3.584,0-6.5-2.916-6.5-6.5 s2.916-6.5,6.5-6.5c2.275,0,4.346,1.166,5.542,3.118l0.253,0.414l0.421-0.241l6.073-3.47l0.441-0.252l-0.259-0.437 C33.864,12.233,29.086,9.5,24,9.5L24,9.5z" opacity=".07" />
                                        </svg>
                                    </button>
                                </a>
                                <a className="social-media-link" href="#">
                                    {/* AWS */}
                                    <button className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M13.527,21.529c0,0.597 0.064,1.08 0.176,1.435c0.128,0.355 0.287,0.742 0.511,1.161c0.08,0.129 0.112,0.258 0.112,0.371c0,0.161 -0.096,0.322 -0.303,0.484l-1.006,0.677c-0.144,0.097 -0.287,0.145 -0.415,0.145c-0.16,0 -0.319,-0.081 -0.479,-0.226c-0.224,-0.242 -0.415,-0.5 -0.575,-0.758c-0.16,-0.274 -0.319,-0.58 -0.495,-0.951c-1.245,1.483 -2.81,2.225 -4.694,2.225c-1.341,0 -2.411,-0.387 -3.193,-1.161c-0.782,-0.774 -1.181,-1.806 -1.181,-3.096c0,-1.37 0.479,-2.483 1.453,-3.321c0.974,-0.838 2.267,-1.258 3.911,-1.258c0.543,0 1.102,0.048 1.692,0.129c0.59,0.081 1.197,0.21 1.836,0.355v-1.177c0,-1.225 -0.255,-2.08 -0.75,-2.58c-0.511,-0.5 -1.373,-0.742 -2.602,-0.742c-0.559,0 -1.133,0.064 -1.724,0.21c-0.591,0.145 -1.165,0.322 -1.724,0.548c-0.255,0.113 -0.447,0.177 -0.559,0.21c-0.112,0.032 -0.192,0.048 -0.255,0.048c-0.224,0 -0.335,-0.161 -0.335,-0.5v-0.79c0,-0.258 0.032,-0.451 0.112,-0.564c0.08,-0.113 0.224,-0.226 0.447,-0.339c0.559,-0.29 1.229,-0.532 2.012,-0.726c0.782,-0.21 1.612,-0.306 2.49,-0.306c1.9,0 3.289,0.435 4.183,1.306c0.878,0.871 1.325,2.193 1.325,3.966v5.224h0.03zM7.045,23.979c0.527,0 1.07,-0.097 1.644,-0.29c0.575,-0.193 1.086,-0.548 1.517,-1.032c0.255,-0.306 0.447,-0.645 0.543,-1.032c0.096,-0.387 0.16,-0.855 0.16,-1.403v-0.677c-0.463,-0.113 -0.958,-0.21 -1.469,-0.274c-0.511,-0.064 -1.006,-0.097 -1.501,-0.097c-1.07,0 -1.852,0.21 -2.379,0.645c-0.527,0.435 -0.782,1.048 -0.782,1.854c0,0.758 0.192,1.322 0.591,1.709c0.383,0.404 0.942,0.597 1.676,0.597zM19.865,25.721c-0.287,0 -0.479,-0.048 -0.607,-0.161c-0.128,-0.097 -0.239,-0.322 -0.335,-0.629l-3.752,-12.463c-0.096,-0.322 -0.144,-0.532 -0.144,-0.645c0,-0.258 0.128,-0.403 0.383,-0.403h1.565c0.303,0 0.511,0.048 0.623,0.161c0.128,0.097 0.223,0.322 0.319,0.629l2.682,10.674l2.49,-10.674c0.08,-0.322 0.176,-0.532 0.303,-0.629c0.128,-0.097 0.351,-0.161 0.639,-0.161h1.277c0.303,0 0.511,0.048 0.639,0.161c0.128,0.097 0.239,0.322 0.303,0.629l2.522,10.803l2.762,-10.803c0.096,-0.322 0.208,-0.532 0.319,-0.629c0.128,-0.097 0.335,-0.161 0.623,-0.161h1.485c0.255,0 0.399,0.129 0.399,0.403c0,0.081 -0.016,0.161 -0.032,0.258c-0.016,0.097 -0.048,0.226 -0.112,0.403l-3.847,12.463c-0.096,0.322 -0.208,0.532 -0.335,0.629c-0.127,0.097 -0.335,0.161 -0.607,0.161h-1.373c-0.303,0 -0.511,-0.048 -0.639,-0.161c-0.128,-0.113 -0.239,-0.322 -0.303,-0.645l-2.474,-10.4l-2.458,10.384c-0.08,0.322 -0.176,0.532 -0.303,0.645c-0.128,0.113 -0.351,0.161 -0.639,0.161zM40.379,26.156c-0.83,0 -1.66,-0.097 -2.458,-0.29c-0.798,-0.193 -1.421,-0.403 -1.836,-0.645c-0.255,-0.145 -0.431,-0.306 -0.495,-0.451c-0.064,-0.145 -0.096,-0.306 -0.096,-0.451v-0.822c0,-0.339 0.128,-0.5 0.367,-0.5c0.096,0 0.192,0.016 0.287,0.048c0.096,0.032 0.239,0.097 0.399,0.161c0.543,0.242 1.133,0.435 1.756,0.564c0.639,0.129 1.261,0.193 1.9,0.193c1.006,0 1.788,-0.177 2.331,-0.532c0.543,-0.355 0.83,-0.871 0.83,-1.532c0,-0.451 -0.144,-0.822 -0.431,-1.129c-0.287,-0.306 -0.83,-0.58 -1.612,-0.838l-2.315,-0.726c-1.165,-0.371 -2.027,-0.919 -2.554,-1.645c-0.527,-0.709 -0.798,-1.499 -0.798,-2.338c0,-0.677 0.144,-1.274 0.431,-1.79c0.287,-0.516 0.671,-0.967 1.149,-1.322c0.479,-0.371 1.022,-0.645 1.66,-0.838c0.639,-0.192 1.309,-0.273 2.012,-0.273c0.351,0 0.718,0.016 1.07,0.064c0.367,0.048 0.702,0.113 1.038,0.177c0.319,0.081 0.623,0.161 0.91,0.258c0.287,0.097 0.511,0.193 0.671,0.29c0.224,0.129 0.383,0.258 0.479,0.403c0.096,0.129 0.144,0.306 0.144,0.532v0.758c0,0.339 -0.128,0.516 -0.367,0.516c-0.128,0 -0.335,-0.064 -0.607,-0.193c-0.91,-0.419 -1.932,-0.629 -3.065,-0.629c-0.91,0 -1.628,0.145 -2.123,0.451c-0.495,0.306 -0.75,0.774 -0.75,1.435c0,0.451 0.16,0.838 0.479,1.145c0.319,0.306 0.91,0.613 1.756,0.887l2.267,0.726c1.149,0.371 1.98,0.887 2.474,1.548c0.494,0.661 0.734,1.419 0.734,2.257c0,0.693 -0.144,1.322 -0.415,1.87c-0.287,0.548 -0.671,1.032 -1.165,1.419c-0.495,0.403 -1.086,0.693 -1.772,0.903c-0.721,0.226 -1.471,0.339 -2.285,0.339z" fill="#466088"></path><path d="M43.396,33.992c-5.252,3.918 -12.883,5.998 -19.445,5.998c-9.195,0 -17.481,-3.434 -23.739,-9.142c-0.495,-0.451 -0.048,-1.064 0.543,-0.709c6.769,3.966 15.118,6.369 23.755,6.369c5.827,0 12.229,-1.225 18.119,-3.741c0.879,-0.403 1.629,0.58 0.767,1.225zM45.583,31.477c-0.671,-0.871 -4.438,-0.419 -6.146,-0.21c-0.511,0.064 -0.591,-0.387 -0.128,-0.726c3.001,-2.128 7.934,-1.516 8.509,-0.806c0.575,0.726 -0.16,5.708 -2.969,8.094c-0.431,0.371 -0.846,0.177 -0.655,-0.306c0.639,-1.596 2.06,-5.192 1.389,-6.046z" fill="#ff9900"></path></g></g></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

// Props Vadilation
Home.propTypes = {
    mode: PropTypes.string,
    toggleMode: PropTypes.func,
    showAlert: PropTypes.func,
};


export default Home