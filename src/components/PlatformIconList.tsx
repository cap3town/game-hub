import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        mac: FaApple,
        nintendo: SiNintendo,
        pc: FaWindows,
        playstation: FaPlaystation,
        web: BsGlobe,
        xbox: FaXbox,
    };

    return (
        <HStack>
            {platforms.map((platform) => (
                <Icon key={platform.id} color="gray.500" as={iconMap[platform.slug]} />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
