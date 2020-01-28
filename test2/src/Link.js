import React from 'react';
import {string} from 'prop-types';

class Link extends React.Component {

    handleClick()  {
        alert( 'Кликнули по ссылке!' ) ;
    };

render(){
    const {title, url} = this.props;

    return <a href={url} onClick={this.handleClick}>{title}</a>;
}};
Link.propTypes = {
    title: string.isRequired,
    url: string.isRequired
};
export default Link;