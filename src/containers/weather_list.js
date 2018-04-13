import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


export class WeatherList extends Component {
         renderWeather(cityData) {
            const name = cityData.city.name;
            const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);
            const {lon, lat} = cityData.city.coord; // ES 6
            

           return <tr key={name}>
               <td><GoogleMap lon={lon} lat={lat} /></td>
               <td>
                 <Chart name="temp" data={temps} color="black" units="C°" />
               </td>
               <td>
                 <Chart name="pressure" data={pressure} color="orange" units="hPa" />
               </td>
               <td>
                 <Chart name="humidity" data={humidity} color="red" units="%" />
               </td>
             </tr>;
         }

         render() {
           return <table className="table table-hover">
               <thead>
                 <tr>
                   <th>City</th>
                   <th>Temperature (K)</th>
                   <th>Pressure (hPa)</th>
                   <th>Humidity (%)</th>
                 </tr>
               </thead>
               <tbody>
                 {this.props.weather.map(this.renderWeather)}
               </tbody>
             </table>;
         }
       }

function mapStateToProps({weather}) {
    return {weather}; // {weather} === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList);