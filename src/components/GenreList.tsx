import { SkeletonText, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
    const { data, error, isLoading } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            {error && console.log('Error retrieving Genres')}

            <ul>
                {isLoading && skeletons.map(() => <SkeletonText skeletonHeight="1rem" />)}
                {data.map((genre) => (
                    <li>{genre.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GenreList;
