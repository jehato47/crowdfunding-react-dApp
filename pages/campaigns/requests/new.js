import React, { Component } from "react";
import { Form, Button, Input, Message, Grid } from "semantic-ui-react";
import Layout from "../../../components/layout";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";

class RequestNew extends Component {
  state = {
    description: "",
    value: "",
    recipient: "",
    errorMessage: "",
    loading: false,
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Request</h3>
        <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
          <Link route={`/campaigns/${this.props.address}/requests`}>
            <Button>
              <a>Back</a>
            </Button>

          </Link>
          <hr />
          <Grid>
            <Grid.Column width={5}>
              <Form.Field>
                <label> Description </label>
                <Input
                  value={this.state.description}
                  onChange={(event) => {
                    this.setState({ description: event.target.value });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label> Value in Ether </label>
                <Input
                  value={this.state.value}
                  onChange={(event) => {
                    this.setState({ value: event.target.value });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label> Recipient </label>
                <Input
                  value={this.state.recipient}
                  onChange={(event) => {
                    this.setState({ recipient: event.target.value });
                  }}
                />
              </Form.Field>
              <Button
                loading={this.state.loading}
                disabled={this.state.loading}
                primary
              >
                Create!
              </Button>
              <Message error header="Oops!" content={this.state.errorMessage} />
            </Grid.Column>
          </Grid>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
