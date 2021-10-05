import React from "react";
import { RingSpinner } from "react-spinners-kit";

export class Loader extends React.Component {
    state = {
        loading: true,
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="loader">
                <RingSpinner
                    size={40}
                    color="#1dbf73"
                    loading={loading}
                />
            </div>
        )
    }
}
