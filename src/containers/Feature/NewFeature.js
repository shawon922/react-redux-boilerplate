import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FeatureForm from '../../components/FeatureForm';
import { fetchFeatures, createFeature } from '../../actions/featureActions';


class NewFeature extends Component {
  
  componentDidMount() {
    //this.props.fetchFeatures();
  }

  componentWillReceiveProps(nextProps) {
    //this.props.features.unshift(nextProps.newFeature);
  }
  submitHandler = (postData) => {
    console.log(postData);
    //this.props.createFeature(postData);
  }

  render() {
    const { features } = this.props.location.state;

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-outline-primary">
              <div className="card-header">
                <h4 className="m-b-0 text-white">Sample form</h4>
              </div>
              <div className="card-body">
                <FeatureForm submitHandler={this.submitHandler} features={features} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  features: state.features.items,
  newFeature: state.features.item
});

export default connect(
  mapStateToProps,
  { fetchFeatures, createFeature }
)(NewFeature);