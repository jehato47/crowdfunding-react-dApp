pragma solidity ^0.4.17;

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping (address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) approvers;

    modifier restricted () {
        require(msg.sender == manager);
        _;
    }

    function Campaign (uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }

    function contribute () public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
    }


    function createRequest(string description, uint value, address recipient) public restricted {
        require(approvers[msg.sender]);

        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequests (uint index) public {
        Request storage request = requests[index];

        // This line is to check wheter user is a donator. If so it will return true
        require(approvers[msg.sender]);

        // This line is to check wheter the user is already voted or not
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;        
    }
    

    function getAllEthers() public {
        msg.sender.transfer(this.balance);
    }

}