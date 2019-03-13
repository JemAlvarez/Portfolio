import React from 'react'
import { PacmanLoader } from 'react-spinners'
 
const Spinner = () => (
    <div className='sweet-loading'>
        <div className='loader-container'>
            <div className='loader'>
                <PacmanLoader
                    sizeUnit={"px"}
                    size={25}
                    margin={"2px"}
                    color={'#d24d57'}
                    loading={true}
                />
            </div>
        </div>
    </div> 
)

export default Spinner