import axios from 'axios';

export default {

    getWeatherForPoint(point) {
        return axios.post(`http://localhost:8042/api/weather/`, point)
            .then(res => {
                return res.data;
            }).catch(err => {
                throw err;
            })
    },

    getWeatherCondition(condition) {
        const conditions = new Map([
            ['clear', 'Ясно'],
            ['partly-cloudy', 'Малооблачно'],
            ['cloudy', 'Облачно с прояснениями'],
            ['overcast', 'Пасмурно'],
            ['drizzle', 'Морось'],
            ['light-rain', 'Небольшой дождь'],
            ['rain', 'Дождь'],
            ['moderate-rain', 'Умеренно сильный дождь'],
            ['heavy-rain', 'Сильный дождь'],
            ['continuous-heavy-rain', 'Длительный сильный дождь'],
            ['showers', 'Ливень'],
            ['wet-snow', 'Дождь со снегом'],
            ['light-snow', 'Небольшой снег'],
            ['snow', 'Снег'],
            ['snow-showers', 'Снегопад'],
            ['hail', 'Град'],
            ['thunderstorm', 'Гроза'],
            ['thunderstorm-with-rain', 'Дождь с грозой'],
            ['thunderstorm-with-hail', 'Гроза с градом'],
        ]);

        return conditions.get(condition);
    }
}
