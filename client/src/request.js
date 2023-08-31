import axios from 'axios';
export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
  },
});

// export const request = axios.create({
//   baseURL: 'http://localhost:1337/api',
//   headers: {
//     Authorization:
//       'bearer 37ef082341c4dde8bc6ab2790a875ec8cacb3e627aafcd3e2fb65fc30c3185495fe9b8f76e0228d969564b242e6da4462a50021c893b61e04a2aea4ecd3bbb37e5eb2d524bef9167a548c22733a57c191b31fbc791c59528c0b93f36acf735a1d00ea43cd3373f9356b733ab89e7ccd376eed273c608d7711b2cb6da8d61cd52',
//   },
// });
