import React from 'react';
import BadgeCard from './BadgeCard';

class BadgeList extends React.Component {
    constructor() {
        super()
        this.state = {array:[]}
    }
    addOne = (obj) => {

    }
    render() {
        return (
            <div className="BadgeList">
                {this.props.array.map((Badge, index)=><BadgeCard {...Badge}/>)}
                {/*<BadgeCard array={""}/>*/}
            </div>
        )}
}

export default BadgeList;