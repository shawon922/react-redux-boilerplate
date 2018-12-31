import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DataTable } from 'react-data-components';
import { fetchFeatures, createFeature } from '../../actions/featureActions';


class Feature extends Component {
  
  componentDidMount() {
    this.props.fetchFeatures();
  }

  componentWillReceiveProps(nextProps) {
    this.props.features.unshift(nextProps.newFeature);
  }



  submitHandler = (postData) => { 
    //console.log(postData);
    //this.props.createFeature(postData);
  }

  render() { 
    const columns = [
      { title: 'Feature Name', prop: 'feature_name' },
      { title: 'Feature Code', prop: 'feature_code' },
      { title: 'Note', prop: 'note' },
      { title: 'App Module', prop: 'app_module' },
      { title: 'App Controller', prop: 'app_controller' },
      { title: 'App Action', prop: 'app_action' },
    ];
    
    const { features } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Feature List</h4>
                <Link to={{
                  pathname: '/new-feature',
                  state: { features: features }
                }}>Add New Feature</Link>
                <div className="table-responsive m-t-40">
                  <DataTable 
                    classNames="display nowrap table table-hover table-striped table-bordered"
                    keys="featureId"
                    columns={columns}
                    initialData={this.props.features}
                    initialPageLength={10}
                    initialSortBy={{ prop: 'featureId', order: 'descending' }}
                  />
                </div>
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
)(Feature);