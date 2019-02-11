import React from 'react'
import GoogleMapReact from 'google-map-react'
import Modal from 'react-modal'
import { IoMdClose } from 'react-icons/io'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
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
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
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

export default Map