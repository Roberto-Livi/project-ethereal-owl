// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract UsersStorage {
    address public manager;

    // Add all the state variables from Users contract
    struct User {
        uint id;
        address userAddress;
        string codename;
        string profession;
        string description;
        uint projectsInvolved;
        uint pendingRequestsCount;
        string mongoNotificationsId;
    }

    struct Project {
        uint id;
        string name;
        string field;
        string mission;
        uint membersCount;
        uint pendingRequests;
    }

    User[] public allUsers;
    Project[] public allProjects;
    User[] public featuredProfiles;
    Project[] public featuredProjects;
    mapping(address => User) public users;
    mapping(address => Project[]) public usersProjects;
    mapping(string => Project) public getProjectByName;
    mapping(uint => User[]) public projectMembers;
    mapping(uint => User[]) public projectPendingRequests;
    mapping(address => Project[]) public recruitPendingRequests;
    mapping(string => User) public getUserByCodename;
    mapping(string => uint) public profCount;
    mapping(string => uint) public fieldCount;
    mapping(address => bool) public walletRegistered;
    mapping(string => bool) public codenameTaken;
    mapping(string => bool) public projectNameTaken;
    mapping(address => uint) public usersProjectsLength;
    mapping(uint => uint) public projectMembersLength;
    uint public usersCount;
    uint public projectsCount;
}
