import { TypeAnimation } from 'react-type-animation';

export default function ExampleComponent  ()  {
  return (
    <TypeAnimation
  style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' ,fontWeight:'bolder', color:'#021526' ,fontSize: '16px'}}
  sequence={[
    `We’ve taken the timeless tradition of gold investment and repackaged it into a simple, hassle-free digital experience. By cutting unnecessary transaction costs and providing fully-integrated storage and insurance services, Goldady is simplifying access to the lucrative world of gold bullion investment and revolutionizing the traditional over-the-counter bullion gold dealership scene in the Middle East.

At Goldady, we're laser-focused on facilitating the secure purchase, sale, vaulting, and storage of physical bullion gold through our digital platform. 
    
    
`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
    1000,
    '',
  ]}
  speed={55}
    repeat={Infinity}
/>
  );
};