import React from 'react';

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
    }


    toggleShow = () => this.setState(({isShow}) => ({isShow: !isShow}));

    render() {
        const {isShow} = this.state;
        return (
            <>
                <button onClick={this.toggleShow}>
                    Toggle
                </button>
                {
                    isShow && <div>Text goes here</div>
                }
                </>
        );
    }
}