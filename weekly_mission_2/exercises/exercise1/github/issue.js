const issue = {
  title: "05 Live 2 Semana 2 [Miércoles 13 de Abril]",
  repositoryNameAssociated: "MissionNodeJS",
  status: "Open",
  numberOfComments: 31,
  labels: ["LIVE 2", "Semana-2"],
  author: "carlogilmar",
  dateCreated: "2022-04-03",
  lastUpdated: "3 hours ago",
  getTitleAndAuthor: function () {
    return this.title + " " + this.author;
  },
  getGeneralInfo: function () {
    return (
      this.title +
      " " +
      this.author +
      " " +
      this.labels +
      " " +
      this.numberOfComments +
      " " +
      this.dateCreated
    );
  },
};

console.log(`Issue title: "${issue.title}"`);
