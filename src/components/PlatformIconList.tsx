import { HStack, Icon, Text } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
interface PlatformIconListProps {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
    iphone: MdPhoneIphone
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform, index) => (
          <Icon key={index} as={iconMap[platform.slug]} color='gray.500'></Icon>
        ))}
      </HStack>
    </>
  );
};
export default PlatformIconList;
