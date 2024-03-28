import { SkeletonText, List, ListItem, HStack, Image, Text, Spinner, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    // selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre | null) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, error, isLoading } = useGenres();
    if (isLoading) return <Spinner margin="7px" />;
    if (error) return null;

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button onClick={() => onSelectGenre(genre)} variant="link" fontSize="lg">
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
