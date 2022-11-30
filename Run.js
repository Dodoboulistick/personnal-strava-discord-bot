require('dotenv').config()

class Run {
    constructor(data){
        if (typeof data === 'undefined') {
            throw new Error('Cannot be called directly');
        }
        this.data = data;
    }

    static async build (date) {
        if(date){
            var async_result = await fetch(`https://www.strava.com/api/v3/athlete/activities?after=${date}&per_page=100`,
            {
                method: 'GET',
                headers: { Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`},
            }).then(res => res.json());
        } else {
            var async_result = await fetch(`https://www.strava.com/api/v3/athlete/activities?per_page=200`,
            {
                method: 'GET',
                headers: { Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`},
            }).then(res => res.json());
        }
        return new Run(async_result);
    }

    get totalDistance() {
        return (this.data.filter(e => e.sport_type == "Run").map(e => e.distance).reduce((a, b) => a + b, 0)/1000).toFixed(2);
    }

    get distanceLastMonth() {
        return this.data.map(e => e.distance).reduce((a, b) => a + b, 0)/1000;
    }

    get movingTime() {
        return (this.data.map(e => e.moving_time).reduce((a, b) => a + b, 0)/60).toFixed(0);
    }

    get kudos() {
        return this.data.map(e => e.kudos_count).reduce((a, b) => a + b, 0);
    }

    get averageHeartRate() {
        return (this.data.map(e => e.average_heartrate).reduce((a, b) => a + b, 0)/this.data.length).toFixed(0);
    }

    get sportTypes() {
        return this.data.map(e => e.type).filter((v, i, a) => a.indexOf(v) === i);
    }

}

module.exports = Run;