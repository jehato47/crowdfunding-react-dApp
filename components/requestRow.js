import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequests(this.props.id).send({
      from: accounts[0],
    });
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const { description, value, recipient, approvalCount, complete } = request;

    return (
      <Row
        disabled={complete}
        positive={approvalCount / approversCount > 0.5 && !complete}
      >
        <Cell>{id}</Cell>
        <Cell>{description}</Cell>
        <Cell>{web3.utils.fromWei(value, "ether")}</Cell>
        <Cell>{recipient}</Cell>
        <Cell>
          {approvalCount} / {approversCount}
        </Cell>
        <Cell>
          {complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>

        <Cell>
          {complete ? null : (
            <Button
              color="teal"
              basic
              // disabled={approvalCount / approversCount < 2}
              onClick={this.onFinalize}
            >
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
