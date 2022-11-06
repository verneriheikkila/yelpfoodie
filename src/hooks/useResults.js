import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        searchApi('pasta');
    }, []);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'helsinki',
                },
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrMessage('Jotain meni vikaan!');
        }
    };
    return [searchApi, results, errMessage];
};
