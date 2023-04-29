// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./UsersStorage.sol";
import "./UsersMixin.sol";

contract UsersProxy is UsersStorage, UsersMixin {
    address private implementation;

    constructor(address _implementation) {
        manager = msg.sender;
        implementation = _implementation;
    }

    function upgradeImplementation(address _newImplementation) public {
        require(msg.sender == manager, "Only the manager can upgrade the implementation.");
        implementation = _newImplementation;
    }

    function transferEtherToImplementation() public {
        require(msg.sender == manager, "Only the manager can transfer Ether.");
        UsersMixin(implementation).transferEther(payable(implementation));
    }

    fallback() external payable {
        address impl = implementation;
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())
            let result := delegatecall(gas(), impl, ptr, calldatasize(), 0, 0)
            let size := returndatasize()
            returndatacopy(ptr, 0, size)

            switch result
            case 0 { revert(ptr, size) }
            default { return(ptr, size) }
        }
    }

    receive() external payable {
        // This function allows the contract to receive Ether
    }
}
