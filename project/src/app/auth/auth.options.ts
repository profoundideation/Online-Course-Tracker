export const options = {
     allowedConnections: ['twitter', 'facebook', 'linkedin', 'github', 'Username-Password-Authentication'],
     theme: {
          logo: 'http://memberclouds.com/members/wp-content/uploads/2015/08/MC-logo07-copy.png',
     },
     auth: {
          sso: true
     },
     additionalSignUpFields: [{
          name: "github_handle",
          placeholder: "Enter your GitHub Handle"
     }],
     languageDictionary: {
          title: "Online Course Tracker"
     }
}