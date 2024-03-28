import { BsChevronDown } from 'react-icons/bs';
import { Menu, MenuButton, MenuItem, Button, MenuList } from '@chakra-ui/react';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton marginX={'1.3rem'} as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectPlatform({} as Platform)}>All Platforms</MenuItem>
                {data.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
