import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Spinner extends React.Component {
    render() {
        const size = this.props.size || '1x'

        return (
            <div className="text-center">
                <FontAwesomeIcon icon='spinner' size={size} spin />
            </div>
        )
    }
}

export default Spinner