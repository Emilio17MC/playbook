const pullrequest = {
  title: "eth: introduce eth67 protocol",
  branchName: "ethereum/go-ethereum:master",
  dateCreated: "2021-12-10",
  author: "rjl493456442",
  status: "open",
  repositoryNameAssociated: "go-ethereum",
  getStatus: function () {
    return this.status;
  },
  getTitleAndAuthor: function () {
    return `${this.title} ${this.author}`;
  },
};

console.log("Pull Request title:", pullrequest.title);
console.log("Pull Request status:", pullrequest.getStatus());
console.log(pullrequest.getTitleAndAuthor());
