import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/game_controller.png';
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='64px' margin='8px' />
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;
