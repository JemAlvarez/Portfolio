import React from 'react'
import GoogleMapReact from 'google-map-react'
import Modal from 'react-modal'
import { IoMdClose } from 'react-icons/io'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 25.47,
            lng: -80.48
        },
        zoom: 11
    };

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                closeTimeoutMS={200}
                className="modal"
            >
                <div className="modal__body" style={{ height: '100%', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDH-cRglkSxWC0YPIyNNsU6uwxEn7vgLWI' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        options={mapOptions}
                    >
                        <AnyReactComponent
                            lat={this.props.center.lat}
                            lng={this.props.center.lng}
                            text={'Kreyser Avrora'}
                        />
                    </GoogleMapReact>
                </div>
                <button
                    className="modal__close"
                    onClick={this.props.onRequestClose}
                >
                    <IoMdClose />
                </button>
            </Modal>
        );
    }
}

const mapOptions = {
    styles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 13
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#144b53"
                },
                {
                    "lightness": 14
                },
                {
                    "weight": 1.4
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#08304b"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#0c4152"
                },
                {
                    "lightness": 5
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b434f"
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b3d51"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#146474"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#021019"
                }
            ]
        }
    ]
}

export default Map