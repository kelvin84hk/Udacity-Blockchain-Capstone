pragma solidity >=0.4.21 <0.6.0;
import './ERC721Mintable.sol';
import './verifier.sol';
import 'openzeppelin-solidity/contracts/drafts/Counters.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is Verifier
{

}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token
{
    
    using Counters for Counters.Counter;
    Counters.Counter sol_index;
    SquareVerifier public my_SquareVerifier;

    constructor(address address_Verifier) public CustomERC721Token()
    {
        my_SquareVerifier = SquareVerifier(address_Verifier);
    }
    // TODO define a solutions struct that can hold an index & an address
    struct Solution{
        uint256 _index;
        address _address;
    }

    // TODO define an array of the above struct
    Solution[] solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping (bytes32 => Solution) unique_solutions;


    // TODO Create an event to emit when a solution is added
    event solution_added(uint256 _index,address _address);


    // TODO Create a function to add the solutions to the array and emit the event
    function add_solution(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(unique_solutions[key]._index == 0, "Solution already exsits");
        Solution memory sol =  Solution({
            _index : sol_index.current(),
            _address : msg.sender
        });
        solutions.push(sol);
        unique_solutions[key] = sol;
        emit solution_added(sol_index.current(),msg.sender);
        sol_index.increment();
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mint_verified(address to, uint256 tokenID, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public {
        require(my_SquareVerifier.verifyTx(a, b, c, input), "Incorrect solution");
        add_solution(a, b, c, input);
        super.mint(to, tokenID);
    }
  
}

























