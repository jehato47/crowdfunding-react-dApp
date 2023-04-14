import React, { Component } from "react";
import Layout from "../../components/layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });

      this.setState({ errorMessage: "" });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>

        <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              type="text"
              label="Weii"
              labelPosition="right"
              placeholder="Enter minimum amount of contribution"
              value={this.state.minimumContribution}
              onChange={(event) => {
                this.setState({ minimumContribution: event.target.value });
              }}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />

          <Button
            loading={this.state.loading}
            disabled={this.state.loading}
            primary
          >
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
