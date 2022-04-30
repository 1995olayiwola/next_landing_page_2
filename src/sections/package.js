/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { Button } from 'react-scroll/modules';
import Img1 from 'assets/img1.jpg';
import Img2 from 'assets/img2.jpg';
import Img3 from 'assets/img3.jpg';
import Img4 from 'assets/img4.jpg';
import Img5 from 'assets/img5.jpg';
import Img6 from 'assets/img6.jpg';
import Img7 from 'assets/img7.jpg';
import Img8 from 'assets/img8.jpg';
import Img9 from 'assets/img9.jpg';
import Img10 from 'assets/img10.jpg';
import Img11 from 'assets/img11.jpg';
import Img12 from 'assets/img12.jpg';
import Img13 from 'assets/img13.jpg';
import Img14 from 'assets/img14.jpg';
import Img15 from 'assets/img15.jpg';
import Img16 from 'assets/img16.jpg';
import Img17 from 'assets/img17.jpg';
import Img18 from 'assets/img18.jpg';
import Img19 from 'assets/img19.jpg';
import Img20 from 'assets/img20.jpg';
import Img21 from 'assets/img21.jpg';
import Img22 from 'assets/img22.jpg';
import Img23 from 'assets/img23.jpg';
import Img24 from 'assets/img24.jpg';
import Img25 from 'assets/img25.jpg';

const packages = {
  monthly: [
    {
      id: 1,
      name: 'Free Plan',
      description: 'For Small teams or office',
      img:Img1
      
      
    },
    {
      id: 2,
      name: 'Business king',
      description: 'For Enterprise business',
      img:Img2

      
      
    },
    {
      id: 3,
      img:Img3

      
      
    },
    {
      id: 4,
      img:Img4

      
      
    },
    {
      id: 5,
      img:Img5

      
      
    },
    {
      id: 6,
      img:Img6

      
      
    },
    {
      id: 7,
      img:Img7

      
      
    },
    {
      id: 8,
      img:Img8

      
      
    },
    {
      id: 9,
      img:Img9

      
      
    },
    {
      id: 10,
      img:Img10

      
      
    },
    {
      id: 11,
      img:Img11

      
      
    },
    {
      id: 12,
      img:Img12

      
      
    },
    {
      id: 13,
      img:Img13

      
      
    },
    {
      id: 14,
      img:Img14

      
      
    },
    {
      id: 15,
      img:Img15

      
      
    },
    {
      id: 16,
      img:Img16

      
      
    },
    {
      id: 17,
      img:Img17

      
      
    },
    {
      id: 18,
      img:Img18

      
      
    },
    {
      id: 19,
      img:Img19

      
      
    },
    {
      id: 20,
      img:Img20

      
      
    },
    {
      id: 21,
      img:Img21

      
      
    },
    {
      id: 22,
      img:Img22

      
      
    },
    {
      id: 23,
      img:Img23

      
      
    },
    {
      id: 24,
      img:Img24

      
      
    },
    {
      id: 25,
      img:Img25

      
      
    },
  ],
 
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly, annual } = packages;
  const [state,setState] = React.useState({
    active:'monthly',
    pricingPlan:monthly
  })
const handlePricingPlan = (plan)=>{
if(plan==='annual'){
  setState({
    active:'annual',
    pricingPlan:annual
  })
}
else{
  setState({
    active:'monthly',
    pricingPlan:monthly
  })
}
}
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{variant:'section.pricing'}}>
<Container>
  <SectionHeader
  slogan="Choose your favourite"
  title="Choose your sizes"
  />
  <Flex sx={styles.buttonGroup}>
<Box sx={styles.buttonGroupInner}>
<button 
className={state.active==='monthly'? 'active' : ' '}
type="button"
aria-label='Monthly'
onClick={()=>handlePricingPlan('monthly')}

>
  Our Products
</button>

</Box>
  </Flex>
  <Box sx={styles.pricingWrapper} className="pricing__wrapper">
<Carousel {...sliderParams}>
  {state.pricingPlan.map((packageData)=>(
<Box sx={styles.pricingItem} key={packageData.id}>
<PriceCard data={packageData}/>
</Box>
  ))}
</Carousel>
  </Box>
</Container>
<Container>
  

  <Box sx={styles.pricingWrapper} className="pricing__wrapper">
<Carousel {...sliderParams}>
  {state.pricingPlan.map((packageData)=>(
<Box sx={styles.pricingItem} key={packageData.id}>
<PriceCard data={packageData}/>
</Box>
  ))}
</Carousel>
  </Box>
</Container>
<Container>
  

  <Box sx={styles.pricingWrapper} className="pricing__wrapper">
<Carousel {...sliderParams}>
  {state.pricingPlan.map((packageData)=>(
<Box sx={styles.pricingItem} key={packageData.id}>
<PriceCard data={packageData}/>
</Box>
  ))}
</Carousel>
  </Box>
</Container>
    </section>
    
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
