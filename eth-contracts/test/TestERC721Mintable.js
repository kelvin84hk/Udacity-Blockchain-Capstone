var ERC721MintableComplete = artifacts.require('CustomERC721Token');


//ganache-cli -m "census accuse invite curtain feel casual grunt cat include ask noble busy"

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one,1111,{from: account_one});
            await this.contract.mint(account_one,2222,{from: account_one});
            await this.contract.mint(account_one,3333,{from: account_one});
        })

        it('should return total supply', async function () { 
            let total_supply = await this.contract.totalSupply();
            assert.equal(total_supply,3,"wrong total supply");
        })

        it('should get token balance', async function () { 
            let token_balance = await this.contract.balanceOf(account_one);
            assert.equal(token_balance,3,"wrong token balance");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let token_uri = await this.contract.tokenURI(1111);
            assert.equal(token_uri,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1111","invalid token uri");
        })

        it('should transfer token from one owner to another', async function () { 
            let owner1111 = await this.contract.ownerOf(1111);
            assert.equal(owner1111,account_one,"invalid owner");
            await this.contract.transferFrom(account_one,account_two,1111);
            owner1111 = await this.contract.ownerOf(1111);
            assert.equal(owner1111,account_two,"invalid owner");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let revert = false;
            try
            {
                await this.contract.mint(account_two,4444,{from: account_two});
            }
            catch(error)
            {
                assert.equal(error["reason"],"caller is not the contract owner","wrong error reason");
                revert = true;
            }
            assert.equal(revert,true,"only contract owner can mint tokens");
        })

        it('should return contract owner', async function () { 
            let contract_owner = await this.contract.get_owner();
            assert.equal(contract_owner,account_one,"invalid contract owner");
        })

    });
})