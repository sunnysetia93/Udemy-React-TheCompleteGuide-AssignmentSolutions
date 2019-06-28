import React, { Component } from 'react';
import './Course.css'
class Course extends Component {
    state={
        courseTitle:''
    }
    componentDidMount(){
        this.getParams();    
    }
    componentDidUpdate(){
        this.getParams();
    }

    getParams(){
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        for(let q of query.entries()){
            if(this.state.courseTitle !== q[1])
                this.setState({courseTitle:q[1]})
        }

    }
    render () {
        console.log(this.props)
        return (
            <div className="Course">
                {/* <h1>{this.props.match.params.title}</h1> */}
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;