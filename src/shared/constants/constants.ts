const API_CONFIG = {
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
    path: {
        login: 'auth/login',
    }
}

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

const CAMPAIGNS = [
    {
        "sentenceId": "6cdff7c3-bdc5-4938-9b8c-d3bcb24750f0",
        "code": "sent_0015",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "70c522ad-6be3-4a04-a9ff-83f9bbd9f5b4",
        "code": "sent_0050",
        "sentence": "When I say Moxi, I mean Moxi."
    },
    {
        "sentenceId": "7bf09f7a-4046-4c01-a1cb-4b75d87a0a5b",
        "code": "sent_0036",
        "sentence": "Hi Moxley!"
    },
    {
        "sentenceId": "b6d1e08e-f0a0-46a1-847f-ba51bf02d98c",
        "code": "sent_0035",
        "sentence": "Hey Fixie!"
    },
    {
        "sentenceId": "e4735c37-429f-415e-bdb8-3c0a7b386395",
        "code": "sent_0097",
        "sentence": "My Ice is melting."
    },
    {
        "sentenceId": "b0f6be4d-7248-457f-84aa-dd33956386b4",
        "code": "sent_0065",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "c70cb919-8456-4b27-9ab9-3e35c685d341",
        "code": "sent_0125",
        "sentence": "Can I ask you a question, Spike?"
    },
    {
        "sentenceId": "9ba99fbc-d8fd-443b-80d5-52f907ba7caa",
        "code": "sent_0043",
        "sentence": "give him oxygen!"
    },
    {
        "sentenceId": "1edb8a50-fcfd-40e8-bc5b-499be6d335b5",
        "code": "sent_0076",
        "sentence": "But Ace, what did you do yesterday?"
    },
    {
        "sentenceId": "7e08046e-a426-48aa-9ecd-288f330603d0",
        "code": "sent_0098",
        "sentence": "Studies found levels of high acidity."
    },
    {
        "sentenceId": "3d0bf8f2-112a-41fc-93a3-87778e8e6c7d",
        "code": "sent_0063",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "4d398cb8-bf06-4c68-ba3a-d88f0dd61b1a",
        "code": "sent_0112",
        "sentence": "Hey Spike!"
    },
    {
        "sentenceId": "b531deaf-6dd3-4d7e-a05e-ac7984805015",
        "code": "sent_0033",
        "sentence": "Hey Boxy!"
    },
    {
        "sentenceId": "8dbc9e72-1a06-44b4-9f7b-0b329d39cdf1",
        "code": "sent_0061",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "8000f490-48a9-49c5-9d03-d19d8d5c08ba",
        "code": "sent_0136",
        "sentence": "Hi Biker!"
    },
    {
        "sentenceId": "8685a52a-6bf9-46aa-8ed1-9764958c379a",
        "code": "sent_0129",
        "sentence": "Spike, please tell me what is 14 times 37."
    },
    {
        "sentenceId": "0eafb89a-2f1d-434c-8996-0480a48f19c8",
        "code": "sent_0104",
        "sentence": "Hi Spike!"
    },
    {
        "sentenceId": "3f89f5a1-7b65-415c-b48e-3b36cb0c3609",
        "code": "sent_0073",
        "sentence": "I don't know, Ace."
    },
    {
        "sentenceId": "13969247-4450-4722-b815-652a34f5621a",
        "code": "sent_0075",
        "sentence": "Can I ask you a question, Ace?"
    },
    {
        "sentenceId": "070fd358-cc28-44b4-8b14-660f4c0e3d12",
        "code": "sent_0052",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "b4d4bfaa-f78b-4753-93a4-ca6b69e12a15",
        "code": "sent_0044",
        "sentence": "Set the volume to maximum."
    },
    {
        "sentenceId": "a259903e-87d4-49d7-aa5d-96d17268b723",
        "code": "sent_0022",
        "sentence": "No, Moxi."
    },
    {
        "sentenceId": "276382e2-25f2-436e-bf01-95a9797d9b0d",
        "code": "sent_0147",
        "sentence": "These pie key limes are striking."
    },
    {
        "sentenceId": "f055e45b-481a-423b-b1c8-e2bf33eb93a9",
        "code": "sent_0124",
        "sentence": "Help me, Spike!"
    },
    {
        "sentenceId": "f1776b8a-8422-4bf5-8726-958fc176eddc",
        "code": "sent_0099",
        "sentence": "This tyre races even better."
    },
    {
        "sentenceId": "48a8843e-1c8e-4b79-9d55-ce96e0307af0",
        "code": "sent_0140",
        "sentence": "High Spike!"
    },
    {
        "sentenceId": "ab91750c-8c8b-49e2-8518-68dd19d2b1f3",
        "code": "sent_0023",
        "sentence": "I don't know, Moxi."
    },
    {
        "sentenceId": "99d4976e-da11-4887-a522-8e26db068471",
        "code": "sent_0062",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "709e9c25-8c1e-43a2-b450-67f062d9fe68",
        "code": "sent_0162",
        "sentence": "When is your birthday?"
    },
    {
        "sentenceId": "77c72bc0-57d4-4f3c-8263-7a6fe3e21d87",
        "code": "sent_0115",
        "sentence": "Hey Spike!"
    },
    {
        "sentenceId": "e5efb307-dde0-4679-a5f4-5a98a63952ed",
        "code": "sent_0047",
        "sentence": "Proxy not found."
    },
    {
        "sentenceId": "b9b4b660-8704-431f-bbc1-a32e09dc07b4",
        "code": "sent_0131",
        "sentence": "Hey Mike!"
    },
    {
        "sentenceId": "00a92df3-a32e-4d8e-917d-29ee19322c66",
        "code": "sent_0148",
        "sentence": "Studies found levels of high spiking activity."
    },
    {
        "sentenceId": "ee7a4eba-a51b-4e8f-bf67-83e07a77b3f2",
        "code": "sent_0086",
        "sentence": "Hi Macy!"
    },
    {
        "sentenceId": "51f1ba32-5f66-4583-a948-293e9645c882",
        "code": "sent_0157",
        "sentence": "How old are you?"
    },
    {
        "sentenceId": "f7d9dcd1-b774-432a-aad5-f74f68aef395",
        "code": "sent_0030",
        "sentence": "Say, Moxi, which books do you like best?"
    },
    {
        "sentenceId": "001e9433-6b09-46b5-844b-c2f69c79473c",
        "code": "sent_0132",
        "sentence": "Hi Crikey!"
    },
    {
        "sentenceId": "ed735ab2-b4d8-4aaa-b64d-aae49d534b9a",
        "code": "sent_0093",
        "sentence": "turn the gray A/C on high!"
    },
    {
        "sentenceId": "afde16af-afe5-4f2b-9578-987dedab9ffb",
        "code": "sent_0143",
        "sentence": "He's having spike tyres on his car!"
    },
    {
        "sentenceId": "192387d9-319b-4177-a3fe-798384ff5ca5",
        "code": "sent_0090",
        "sentence": "High Space!"
    },
    {
        "sentenceId": "b64960ce-a9a5-402d-b6f2-c2fcb5a7a790",
        "code": "sent_0037",
        "sentence": "Hey Mocks!"
    },
    {
        "sentenceId": "62e7fe31-1356-4d21-a56f-f6f96c312bdf",
        "code": "sent_0156",
        "sentence": "What was the last movie you saw?"
    },
    {
        "sentenceId": "1386b25f-cf5f-4160-a7f5-a26ac4a443e7",
        "code": "sent_0078",
        "sentence": "Ace, what can I do here?"
    },
    {
        "sentenceId": "3f145f75-7477-459b-b2c5-2392fa5d548e",
        "code": "sent_0105",
        "sentence": "Hi Spike!"
    },
    {
        "sentenceId": "8f19cc71-385d-45fc-ba67-9674b579a9a7",
        "code": "sent_0004",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "4f3a2472-5614-47a3-8c25-03de5cd8492f",
        "code": "sent_0121",
        "sentence": "Yes, Spike."
    },
    {
        "sentenceId": "6e9368cd-aa6a-422e-8402-2b3914872ff1",
        "code": "sent_0071",
        "sentence": "Yes, Ace."
    },
    {
        "sentenceId": "ba4c6daa-862b-4308-9fd7-5c2b76b591f8",
        "code": "sent_0034",
        "sentence": "Hi Sox!"
    },
    {
        "sentenceId": "f50f301b-4d05-4aa6-bc93-632e76645471",
        "code": "sent_0025",
        "sentence": "Can I ask you a question, Moxi?"
    },
    {
        "sentenceId": "ef12b9c9-1d5b-46ab-9a5b-6ec908f25d19",
        "code": "sent_0160",
        "sentence": "Have you finished your homework already?"
    },
    {
        "sentenceId": "540939ff-84f0-433f-a39d-e2d51ed46b67",
        "code": "sent_0100",
        "sentence": "When I say Ace, I mean Ace."
    },
    {
        "sentenceId": "af930018-65ce-4d27-908a-564dc30a870f",
        "code": "sent_0013",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "3ad3fe2b-f4d8-44cb-98d4-3681e2b047b2",
        "code": "sent_0011",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "a14138d3-4268-4c79-82ce-9c9d08f5b55c",
        "code": "sent_0046",
        "sentence": "Is your mom's name Moxi too?"
    },
    {
        "sentenceId": "07fc7bbb-1757-4a9d-9999-60e9d540ac82",
        "code": "sent_0145",
        "sentence": "My slice is the biggest."
    },
    {
        "sentenceId": "5d9c544b-6854-4ec1-81e3-b367ab579037",
        "code": "sent_0144",
        "sentence": "It's like e-mail."
    },
    {
        "sentenceId": "9b070f5b-8e99-4d1c-b064-a90e07803cf6",
        "code": "sent_0001",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "ed82d006-ce4d-4118-9bf0-960f7155ca73",
        "code": "sent_0094",
        "sentence": "I like my space."
    },
    {
        "sentenceId": "6b0789dd-0c92-4a51-a48d-469d04e05fe2",
        "code": "sent_0027",
        "sentence": "Tell me Moxi, what is your favourite color?"
    },
    {
        "sentenceId": "ed52d259-c252-4a54-b9f4-df60153d7304",
        "code": "sent_0149",
        "sentence": "Crikey, what did you do?"
    },
    {
        "sentenceId": "59a1e12c-fe74-4d65-a92d-a89512fbe32c",
        "code": "sent_0021",
        "sentence": "Yes, Moxi."
    },
    {
        "sentenceId": "62b40d10-538d-4638-b7cc-72aa9134ca72",
        "code": "sent_0031",
        "sentence": "Hey Foxi!"
    },
    {
        "sentenceId": "3afc9fc3-90f9-43a1-b07e-f0edc30e2935",
        "code": "sent_0111",
        "sentence": "Hey Spike!"
    },
    {
        "sentenceId": "6dcaa2ed-6e54-4f8f-acc0-48da557e2efe",
        "code": "sent_0012",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "c3146088-8901-4c66-85f8-594298772add",
        "code": "sent_0150",
        "sentence": "When I say Spike, I mean Spike."
    },
    {
        "sentenceId": "25dae777-ac8b-4208-a2dc-13673fc087be",
        "code": "sent_0123",
        "sentence": "I don't know, Spike."
    },
    {
        "sentenceId": "5d217520-8cd1-45bc-ab8a-5a222c34e682",
        "code": "sent_0158",
        "sentence": "Do you play any musical instruments?"
    },
    {
        "sentenceId": "c7e3e012-af1d-44ff-a44b-7ebb68676a47",
        "code": "sent_0122",
        "sentence": "No, Spike."
    },
    {
        "sentenceId": "e3ac19cd-fabf-43dd-9f7f-9b0eee76be9c",
        "code": "sent_0080",
        "sentence": "Say, Ace, which books do you like best?"
    },
    {
        "sentenceId": "60302879-a817-492e-87b4-5f1b7f7ab657",
        "code": "sent_0089",
        "sentence": "Hey Ice!"
    },
    {
        "sentenceId": "2a0cda36-cce4-4d0d-a7fe-361e7d8505e9",
        "code": "sent_0155",
        "sentence": "Have you been outside lately?"
    },
    {
        "sentenceId": "f9e0cb5f-c811-4bf1-b7e8-2b973d332b59",
        "code": "sent_0085",
        "sentence": "Hey Casey!"
    },
    {
        "sentenceId": "513b7911-c466-4218-84fe-eed27906fbbc",
        "code": "sent_0053",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "0e478704-c869-4cb3-903f-796f08e0e054",
        "code": "sent_0133",
        "sentence": "Hey Psyche!"
    },
    {
        "sentenceId": "bafe3ee4-f598-4a04-b8be-d29e96e80260",
        "code": "sent_0079",
        "sentence": "Ace, please tell me what is 14 times 37."
    },
    {
        "sentenceId": "66d0d685-2418-4377-8e96-86943acd85f8",
        "code": "sent_0113",
        "sentence": "Hey Spike!"
    },
    {
        "sentenceId": "c539f77c-d4a6-4744-a777-80cc54bc298d",
        "code": "sent_0146",
        "sentence": "Is your dad's name Spike too?"
    },
    {
        "sentenceId": "c00b4de7-22ed-4985-85a6-b5a23580c8f0",
        "code": "sent_0114",
        "sentence": "Hey Spike!"
    },
    {
        "sentenceId": "d4b569a6-b7a0-4ab6-a871-fa65eceec562",
        "code": "sent_0139",
        "sentence": "Hey Spy!"
    },
    {
        "sentenceId": "d244579e-d471-4d84-a5b5-7c1a220baa5d",
        "code": "sent_0154",
        "sentence": "Do you like to go to the theater?"
    },
    {
        "sentenceId": "aa4027b2-749b-47c4-9692-8160ce5f5758",
        "code": "sent_0130",
        "sentence": "Say, Spike, which books do you like best?"
    },
    {
        "sentenceId": "a0d7dbc7-c45f-4ec4-9cbc-be689dc4269d",
        "code": "sent_0045",
        "sentence": "They hire mock seaters now."
    },
    {
        "sentenceId": "e4c9aca7-7b1e-4965-90b0-75e05edcc357",
        "code": "sent_0054",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "f7e2f076-bd1a-41da-bf6a-1ba5c9160aba",
        "code": "sent_0029",
        "sentence": "Moxi, please tell me what is 14 times 37."
    },
    {
        "sentenceId": "d4eff8a0-7836-4a46-98f6-9092948aaac1",
        "code": "sent_0151",
        "sentence": "What kind of video games do you play?"
    },
    {
        "sentenceId": "aa5630f0-a746-444b-9f2c-9827eb22be95",
        "code": "sent_0003",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "412321b6-8271-4cf1-b86c-a7ca194b065b",
        "code": "sent_0042",
        "sentence": "These are high mixing levels."
    },
    {
        "sentenceId": "9e167c39-82d5-43b9-a588-c2c5d0d69921",
        "code": "sent_0141",
        "sentence": "My name is Spike Eagle."
    },
    {
        "sentenceId": "445dfb66-f418-4be1-931e-544319865b98",
        "code": "sent_0014",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "9e5fe8ec-ca47-4083-ba44-e4977b9c3ecf",
        "code": "sent_0126",
        "sentence": "But Spike, what did you do yesterday?"
    },
    {
        "sentenceId": "e4927e29-380b-4d68-9e15-27878dd47b03",
        "code": "sent_0005",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "8454c471-cf20-48c6-8e1a-9205477257ab",
        "code": "sent_0028",
        "sentence": "Moxi, what can I do here?"
    },
    {
        "sentenceId": "e55bf0b2-5f78-40d2-9442-a95b07fa3ba4",
        "code": "sent_0103",
        "sentence": "Hi Spike!"
    },
    {
        "sentenceId": "e59dcefa-d3de-4382-bad4-bc254028b8df",
        "code": "sent_0152",
        "sentence": "What is the funniest thing you've ever done?"
    },
    {
        "sentenceId": "9c09755f-a747-409b-b6ed-1fd3eda8aa4d",
        "code": "sent_0087",
        "sentence": "Hey Stacy!"
    },
    {
        "sentenceId": "639920ea-2b9b-449f-9b87-d3854edb07f5",
        "code": "sent_0072",
        "sentence": "No, Ace."
    },
    {
        "sentenceId": "97540d51-59b7-4238-b1c8-39c351dd55f1",
        "code": "sent_0088",
        "sentence": "Hey Tracey!"
    },
    {
        "sentenceId": "daead1fa-e728-4246-b8e6-84bcc6e8c88c",
        "code": "sent_0049",
        "sentence": "This shrine locks even better."
    },
    {
        "sentenceId": "2c4080c2-34d6-4dc4-b7ff-c2dff24a7101",
        "code": "sent_0082",
        "sentence": "Hi Grace!"
    },
    {
        "sentenceId": "b5b6f5fe-1a13-4173-b429-050af6649f98",
        "code": "sent_0091",
        "sentence": "My name is Ace Ventura."
    }
];

export {
    API_CONFIG,
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    CAMPAIGNS,
};