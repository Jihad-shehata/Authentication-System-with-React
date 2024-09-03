import { TypeAnimation } from 'react-type-animation';

export default function ExampleComponent  ()  {
  return (
    <TypeAnimation
  style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' ,fontWeight:'bolder', color:'#021526' ,fontSize: '16px'}}
  sequence={[
    `FutureMinds AI is a leading educational platform designed to equip students and professionals with the skills needed to thrive in the world of artificial intelligence. Our comprehensive courses cover a wide range of AI topics, from foundational concepts to advanced machine learning techniques. We emphasize hands-on learning through real-world projects and interactive sessions, ensuring that our students gain practical experience. With expert instructors, up-to-date curriculum, and a community-driven approach, AI Academy fosters innovation and critical thinking. We are committed to making AI education accessible and relevant, empowering individuals to drive technological advancements. Whether you're a beginner or an experienced professional, AI Academy is your gateway to mastering the future of technology. Join us to unlock your potential and make an impact in the AI revolution. 
    
    
`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
    1000,
    '',
  ]}
  speed={55}
    repeat={Infinity}
/>
  );
};