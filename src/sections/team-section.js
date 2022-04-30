/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/giwa.jpg';
import Member2 from 'assets/ola.jpg';


const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Giwa Abdulwasiu',
    title: 'Giwa Abdulwasiu',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.facebook.com/Omogiwa-Global-Ventures-104421131749022/%3Fref%3Dpy_c&ved=2ahUKEwjCpvyT47b3AhVEQhoKHRvwD6UQFnoECAMQAQ&usg=AOvVaw0N3pjGy0nC77nLQQ46F5TC',
        icon: <FaFacebookF />,
      }
      
      
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Olayiwola Abdur Rahmon',
    title: 'Olayiwola Abdur Rahmon',
    designation: ' Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://web.facebook.com/rahmon.olayiwola.1?_rdc=1&_rdr',
        icon: <FaFacebookF />,
      }
    ]
  }
]

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader 
        slogan="Our Team"
        title="The most qualified and talented individuals"
        />
        <Grid sx={styles.grid}>
          {data.map((item)=>(
            <TeamCard
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            designation={item.designation}
            social={item.socialProfile}
            
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
