import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessaget] = useState('')

    const searchPlaces = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessaget('Something went wrong :(')
        }
    };

    useEffect(() => {
        searchPlaces('pasta')
    }, []);

    return [searchPlaces, results, errorMessage]
}