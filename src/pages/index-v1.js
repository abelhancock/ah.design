import React, { Component } from 'react'
import styles from './styles.module.scss'

import Layout from 'src/components/organisms/Layout'
import SEO from 'src/components/molecules/seo'
import Container from 'src/components/molecules/Container'
import { Carousel } from 'react-responsive-carousel'
import "./carousel.scss"

class IndexPage extends Component {
  
  constructor (props) {
      super(props);

      this.state = {
          currentSlide: 0
      };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.next)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.next)
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
    return (
      <Layout onClick={this.prev}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
        <Carousel
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          {...this.props}
          
          axis={"vertical"}
          autoPlay={false}
          transitionTime={450}
          useKeyboardArrows={false}
          emulateTouch={true}
          
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}

          className={styles.carousel}
          >
        <div>
          <Container className={styles.container1} onScroll={this.next}>
            <div className={styles.introduction}>
              <p className={styles.hello}><span>Hello</span>, I am</p>
              <h1 className={styles.name}>Abel Hancock</h1>
              <p className={styles.paragraph}>I help companies create <span>experiences</span><br></br>
      that are <span>mutually beneficial</span> for both</p>
              <p className={styles.rotatingText}><span>Subscribers</span> and <span>Providers</span></p>
            </div>
            <div onClick={this.next} className={styles.scrollContainer}>scroll</div>
          </Container>
        </div>
        <div className={styles.secondSlide}></div>
        </Carousel>
          <Container className={styles.projects} id="projects">
          </Container>
      </Layout>
    )
  }
}

export default IndexPage
