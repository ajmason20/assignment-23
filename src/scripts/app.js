import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

const LegislatorProfList = React.createClass({

  render: function(){
    console.log(this.props.legislators)
    return (
      <div className="profile-page">
          let legislatorItems = {this.props.legislators.map(function(legislatorObj){
          return <LegislatorsProf legislators={legislatorObj}/>
          })}
      </div>
    )
  }

})

const LegislatorsProf = React.createClass({

  render: function(){

    return (
      <div className="profile-thumb">
        <h3>{this.props.legislators.first_name} {this.props.legislators.last_name}</h3>
        <h4>{this.props.legislators.title}--{this.props.legislators.party}-{this.props.legislators.state}</h4>
        <ul>
          <li>email: {this.props.legislators.oc_email}</li>
          <li>website: {this.props.legislators.website}</li>
          <li>facebook: {this.props.legislators.facebook_id}</li>
          <li>twitter: {this.props.legislators.twitter_id}</li>
        </ul>
        <p><strong>Term End {this.props.legislators.term_end}</strong></p>
      </div>
    )
  }

})

  $.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
    ReactDom.render(
      <LegislatorProfList legislators={serverRes.results}/>,
      document.querySelector('#app-container'));
    })
