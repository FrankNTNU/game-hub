import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/game_controller.png';
import ColorModeSwitch from './ColorModeSwitch';
const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='64px' />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
