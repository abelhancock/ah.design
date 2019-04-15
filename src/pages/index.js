import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Carousel } from 'react-responsive-carousel'
import "./carousel.scss"
import styles from './styles.module.scss'

import { SEO, Container } from 'components/molecules'
import { Layout, ProjectSlide } from 'components/organisms'



class IndexPage extends Component {


    constructor (props) {
        super(props);
  
        this.state = {
            currentSlide: 0,
            scrolled: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (window.pageYOffset >= window.innerHeight) {
            this.setState({scrolled: !this.state.scrolled})
        }
    }
    onClick = () => {
        this.setState({scrolled: false})
    }
    next = () => {
        this.setState(state => ({
            currentSlide: state.currentSlide + 1
        }));
    }
  
    prev = () => {
        this.setState(state => ({
            currentSlide: state.currentSlide - 1
        }));
    }
  
    updateCurrentSlide = (index) => {
        const { currentSlide } = this.state;
  
        if (currentSlide !== index) {
            this.setState({
                currentSlide: index
            });
        }
    }
render() {
    if (typeof window !== 'undefined') {
        if(this.state.scrolled) {
          document.body.style.position = "fixed";
          document.body.style.top = "-100vh";
        }
        else {
          document.body.style.position = "unset";
          document.body.style.top = "unset";
        }
      }
    return (
        <Layout>
        <AnchorLink onClick={this.onClick} offset="0" href='#top' className={styles.top} />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
        <Container className={styles.welcome}>
            <div className={styles.introduction}>
                <div className={styles.hello}>
                    <h1 className={styles.name}>I am <b>Abel Hancock</b></h1>
                </div>
                <div className={styles.paragraph}>
                    I help companies create <b>experiences</b>
                    <br></br>
                    that are <b>mutually beneficial</b> for both
                    <p className={styles.rotatingText}><b>Subscribers</b> and <b>Providers</b></p>
                </div>
            </div>
            <AnchorLink offset="0" href='#projects' className={styles.scroll}>Scroll <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.717 17.136c.755-.67 1.85-1.357 3.283-2.062v1.248C6.333 17.789 5.1 19.348 4.3 21h-.6c-.8-1.652-2.033-3.211-3.7-4.678v-1.248c1.433.705 2.528 1.392 3.283 2.062V.716a.717.717 0 1 1 1.433 0v16.42z" fill="currentColor"/></svg></AnchorLink>
        </Container>
        <Container id={"projects"} className={styles.projects}>
        <Carousel
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          {...this.props}
          
          axis={"vertical"}
          autoPlay={false}
          transitionTime={0}
          useKeyboardArrows={true}
          emulateTouch={true}
          infiniteLoop={true}
          
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          showStatus={false}

          className={styles.carousel}
          >
            <div className={styles.liferay}>
                <ProjectSlide
                    title="Liferay"
                    description="Design"
                    img={'images/liferay.png'}
                    alt="liferay"
                />
            </div>
            <div className={styles.triblio}>
                <ProjectSlide
                    title="Triblio"
                    description="Design"
                    img={'/images/Triblio.png'}
                    alt="triblio"
                />
            </div>
            <div>3</div>
            <div>4</div>
          </Carousel>
          <div className={styles.controls}>
            <div className={styles.arrowPrev} onClick={this.prev} />
            <div className={styles.arrowNext} onClick={this.next} />
          </div>
          <div className={styles.projectsLabel}>Projects</div>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
