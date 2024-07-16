import axios from 'axios';

const api = axios.create({
    baseURL: 'https://divineconnection.co.in', // Base URL for the API
});

export const fetchHoroscope = async (horoscope_data, time) => {
    try {
        const response = await api.get('/horoscope', { // API endpoint here
            params: { horoscope_data, time }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching horoscope data:', error);
        throw error;
    }
};
