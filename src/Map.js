import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import geojson from './nhcounties.json'


class Map extends Component {

    constructor(props) {
        super()
        this.state = {
            lat: null,
            lng: null,
            zoom: null
        }
    }


    componentDidMount() {

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYXN0aWFuLWNoIiwiYSI6ImNpejkxdzZ5YzAxa2gyd21udGpmaGU0dTgifQ.IrEd_tvrl6MuypVNUGU5SQ'

        const map = new mapboxgl.Map({
            container: this.container,
            style: 'mapbox://styles/mapbox/light-v9'
        })


        map.on('load', () => {

            map.addSource('nh', {
                'type': 'geojson',
                'data': geojson
            })

            map.addLayer({
                'id': 'newh',
                'type': 'fill',
                'source': 'nh',
                'paint': {
                    'fill-color': '#088',
                    'fill-opacity': 0.8
                }

            })

            map.flyTo({
                center: [-71, 43],
                zoom: [5]
            })

        })
    }

    render() {

        return (
            <div>
                <div className='Map' ref={(x) => {this.container = x}}></div>
            </div>
        )
    }


}


export default Map