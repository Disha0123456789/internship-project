import axios from 'axios';

const api = axios.create({
    baseURL: 'http://divineconnection.co.in:8001', // Ensure this matches the URL where FastAPI is running
});

export const fetchHoroscope = async (horoscope_data, time) => {
    try {
        const response = await api.get('/horoscope', {
            params: { horoscope_data, time }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching horoscope data:', error);
        throw error;
    }
};
