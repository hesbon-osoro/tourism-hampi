import React, { Component } from 'react';
import * as styles from '../../css/items.module.css';
import Place from './Place';
import Title from '../Title';

class PlaceList extends Component {
    state = {
        places: [],
        sortedPlaces: [],
    }
    componentDidMount() {
        this.setState({
            places: this.props.places.edges,
            sortedPlaces: this.props.places.edges
        })
    }
    render() {
        return (
            <section className={styles.places}>
                <Title title='hampi' subtitle='places'/>
                <div className={styles.center}>
                    {
                        this.state.sortedPlaces && this.state.sortedPlaces.map(({node})=>(
                            <Place key={node.contentful_id} place={node} />
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default PlaceList;
