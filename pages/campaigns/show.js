import React, { Component } from "react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    console.log(props.query.address);
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);

    return {};
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Campaign Show</h3>
        </div>
      </Layout>
    );
  }
}

export default CampaignShow;
