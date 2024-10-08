// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title A helper CONTRACT for managing nonce of tx sender

contract NonceManager {
    event NonceIncreased(address indexed maker, uint256 oldNonce, uint256 newNonce);

    mapping(address => uint256) public nonce;

    uint256[100] private __gap;

    /// @notice Advances nonce by one
    function increaseNonce() external {
        advanceNonce(1);
    }

    /// @notice Advances nonce by specified amount
    function advanceNonce(uint8 amount) public {
        uint256 newNonce = nonce[msg.sender] + amount;
        nonce[msg.sender] = newNonce;
        emit NonceIncreased(msg.sender, newNonce - amount, newNonce);
    }

    /// @notice Checks if `makerAddress` has specified `makerNonce`
    /// @return Result True if `makerAddress` has specified nonce. Otherwise, false
    function nonceEquals(address makerAddress, uint256 makerNonce) external view returns (bool) {
        return nonce[makerAddress] == makerNonce;
    }
}
