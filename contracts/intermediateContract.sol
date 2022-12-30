// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

interface communicate {
    function attempt() external;
}

contract intermediateContract {

communicate public common;

 constructor(address challengeAddr) {
      common = communicate(challengeAddr);
}

function winner() external{
    common.attempt();
}
}


