const { App } = require('@slack/bolt');
const axios = require('axios');
const qs = require('query-string');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: 'xoxb-977111493845-967561669107-UMlYNEBfVoJSJ1dmtIeO72HB',
    signingSecret: '34e2c20a5ed474df20d9bae45363ca38'
});

// //simplata API Call
// function getMatchData(msg) {
//     const formData = {
//         'v': '0.1.0',
//         'api_key': '1957-9164-4593-7482',
//         'app_unique_name': 'integration-test-1',
//         'app': 'slack',
//         'data': msg,
//     }

//     const config = {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     }

//     axios.post('https://gols1.simplata.com/api/tokenize', qs.stringify(formData), config)
//         .then(function (response) {
//             if (response.status === "ok") {
//                 console.log(response.status);
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
// // Listens to incoming messages that contain "hello"
// app.message(async ({ payload, context }) => {
//     const messages = payload.text;
//     try {

//         const updateResult = await app.client.chat.update({
//             // The token you used to initialize your app is stored in the `context` object
//             token: 'xoxp-977111493845-977111953909-997048649987-a4a3e3fd90ca791dedb2c99c15e1fa8d',
//             // Payload message should be posted in the channel where original message was heard
//             channel: payload.channel,
//             ts: payload.ts,
//             // The user the message should appear for
//             user: payload.user,
//             text: 'Hi, I updated mesaage'
//         });


//         // Call the chat.postEphemeral method using the built-in WebClient
//         const result = await app.client.chat.postEphemeral({
//             // The token you used to initialize your app is stored in the `context` object
//             token: context.botToken,
//             // Payload message should be posted in the channel where original message was heard
//             channel: payload.channel,
//             // The user the message should appear for
//             user: payload.user,
//             "blocks": [
//                 {
//                     "type": "section",
//                     "text": {
//                         "type": "mrkdwn",
//                         "text": `${messages}`
//                     }
//                 },
//                 {
//                     "type": "section",
//                     "text": {
//                         "type": "mrkdwn",
//                         "text": "*This looks like personal identifiable information (PII)*. Choose how to share it:"
//                     }
//                 },
//                 {
//                     "type": "actions",
//                     "elements": [
//                         {
//                             "type": "button",
//                             "text": {
//                                 "type": "plain_text",
//                                 "text": "Redact PII",
//                                 "emoji": true
//                             },
//                             "action_id": "button_click"
//                         }
//                     ]
//                 },
//                 {
//                     "type": "actions",
//                     "elements": [
//                         {
//                             "type": "button",
//                             "text": {
//                                 "type": "plain_text",
//                                 "text": "Keep PII",
//                                 "emoji": true
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     "type": "actions",
//                     "elements": [
//                         {
//                             "type": "button",
//                             "text": {
//                                 "type": "plain_text",
//                                 "text": "Delete PII",
//                                 "emoji": true
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     "type": "actions",
//                     "elements": [
//                         {
//                             "type": "button",
//                             "text": {
//                                 "type": "plain_text",
//                                 "text": "Delete message",
//                                 "emoji": true
//                             }
//                         }
//                     ]
//                 }

//             ]
//         });
//     }
//     catch (error) {
//         console.error(error);
//     }
// });


// app.action('button_click', ({ body, ack, say }) => {
//     // Acknowledge the action
//     ack();
//     say(`<@${body.user.id}> clicked the button`);
// });

(async () => {
    // Start your app
    await app.start(80);

    console.log('⚡️ Bolt app is running!');
})();