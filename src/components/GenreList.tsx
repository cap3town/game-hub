import { SkeletonText, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => {
    const { genres, error, isLoading } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            {error && <Text>{error}</Text>}

            <ul>
                {isLoading && skeletons.map(() => <SkeletonText />)}
                {genres.map((genre) => (
                    <li>{genre.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GenreList;
