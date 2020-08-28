let SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
let SquareVerifier = artifacts.require('SquareVerifier');
let proofData = require('./proof');

contract('TestSolnSquareVerifier', accounts => {

    let proof_correct = proofData.inputs;

    describe('TestSolnSquareVerifier', function () {
        beforeEach(async function () {
            let Verifier = await SquareVerifier.new({from: accounts[0]});
            this.contract = await SolnSquareVerifier.new(Verifier.address,{from: accounts[0]});
        });

        it('Test if a new solution can be added for contract', async function () {
            let revert = false;
            try
            {
                await this.contract.add_solution(proofData.proof.a, proofData.proof.b, proofData.proof.c,proof_correct,{from: accounts[0]});
            }
            catch(error)
            {
                revert = true;
            }

            assert.equal(revert, false, "new solution is not added");
        });

        it('Test if an ERC721 token can be minted for contract ', async function () {
            let revert2 = false;
            try
            {
                await this.contract.mint_verified(accounts[0],4444,proofData.proof.a, proofData.proof.b, proofData.proof.c,proof_correct,{from: accounts[0]});
            }
            catch(error)
            {
                revert2 = true;
            }

            assert.equal(revert2, false, "ERC721 token can't be minted");
        });
        
    });

});

