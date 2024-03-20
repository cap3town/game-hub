import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card width="300px" overflow="hidden" borderRadius={10}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <VStack height="100%" justifyContent="space-between">
                    <Heading width="100%" fontSize="xl">
                        {game.name}
                    </Heading>
                    <HStack width="100%" marginTop="1rem" justifyContent="space-between">
                        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
