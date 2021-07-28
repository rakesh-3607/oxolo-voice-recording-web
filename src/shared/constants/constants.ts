const API_CONFIG = {
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
    path: {
        login: 'auth/login',
    }
}
const campaigns = [
    {
        "sentenceId": "9b070f5b-8e99-4d1c-b064-a90e07803cf6",
        "code": "sent_0001",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "bf83c860-d986-4baa-bd3b-3fa080f0e2dd",
        "code": "sent_0002",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "aa5630f0-a746-444b-9f2c-9827eb22be95",
        "code": "sent_0003",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "8f19cc71-385d-45fc-ba67-9674b579a9a7",
        "code": "sent_0004",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "e4927e29-380b-4d68-9e15-27878dd47b03",
        "code": "sent_0005",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "ea467855-f27c-4986-a1ea-3df68c46d62a",
        "code": "sent_0006",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "d0359fe4-5e6f-433e-92a5-dac54f1bdf30",
        "code": "sent_0007",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "f915b1e2-b149-49c4-9e42-5038767077f1",
        "code": "sent_0008",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "73204cc0-fac6-494f-bbed-b0d74baacaa3",
        "code": "sent_0009",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "f41ef3a5-b380-4430-89fc-858b0e7fdca1",
        "code": "sent_0010",
        "sentence": "Hi Moxi!"
    },
    {
        "sentenceId": "3ad3fe2b-f4d8-44cb-98d4-3681e2b047b2",
        "code": "sent_0011",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "6dcaa2ed-6e54-4f8f-acc0-48da557e2efe",
        "code": "sent_0012",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "af930018-65ce-4d27-908a-564dc30a870f",
        "code": "sent_0013",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "445dfb66-f418-4be1-931e-544319865b98",
        "code": "sent_0014",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "6cdff7c3-bdc5-4938-9b8c-d3bcb24750f0",
        "code": "sent_0015",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "f3201cdd-398c-4b4b-9f7b-e4d317ab378b",
        "code": "sent_0016",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "0301e5a9-4873-49fb-bac0-af3a7c8dfdf0",
        "code": "sent_0017",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "754922be-1cf4-4048-9c56-e3d262f97c94",
        "code": "sent_0018",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "361b7ac6-d6c9-44e1-b807-2a62422f2d94",
        "code": "sent_0019",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "2c3b0b6f-8b71-40dc-9ab1-efecaf252af7",
        "code": "sent_0020",
        "sentence": "Hey Moxi!"
    },
    {
        "sentenceId": "59a1e12c-fe74-4d65-a92d-a89512fbe32c",
        "code": "sent_0021",
        "sentence": "Yes, Moxi."
    },
    {
        "sentenceId": "a259903e-87d4-49d7-aa5d-96d17268b723",
        "code": "sent_0022",
        "sentence": "No, Moxi."
    },
    {
        "sentenceId": "ab91750c-8c8b-49e2-8518-68dd19d2b1f3",
        "code": "sent_0023",
        "sentence": "I don't know, Moxi."
    },
    {
        "sentenceId": "c9eb45c8-696a-443f-99af-d5deb0ccc102",
        "code": "sent_0024",
        "sentence": "Help me, Moxi!"
    },
    {
        "sentenceId": "f50f301b-4d05-4aa6-bc93-632e76645471",
        "code": "sent_0025",
        "sentence": "Can I ask you a question, Moxi?"
    },
    {
        "sentenceId": "5fc3b86f-66d4-4332-b580-3916bbf0b176",
        "code": "sent_0026",
        "sentence": "But Moxi, what did you do yesterday?"
    },
    {
        "sentenceId": "6b0789dd-0c92-4a51-a48d-469d04e05fe2",
        "code": "sent_0027",
        "sentence": "Tell me Moxi, what is your favourite color?"
    },
    {
        "sentenceId": "8454c471-cf20-48c6-8e1a-9205477257ab",
        "code": "sent_0028",
        "sentence": "Moxi, what can I do here?"
    },
    {
        "sentenceId": "f7e2f076-bd1a-41da-bf6a-1ba5c9160aba",
        "code": "sent_0029",
        "sentence": "Moxi, please tell me what is 14 times 37."
    },
    {
        "sentenceId": "f7d9dcd1-b774-432a-aad5-f74f68aef395",
        "code": "sent_0030",
        "sentence": "Say, Moxi, which books do you like best?"
    },
    {
        "sentenceId": "62b40d10-538d-4638-b7cc-72aa9134ca72",
        "code": "sent_0031",
        "sentence": "Hey Foxi!"
    },
    {
        "sentenceId": "eef3b738-ef41-4540-92c8-178c3fa09787",
        "code": "sent_0032",
        "sentence": "Hi Frogs!"
    },
    {
        "sentenceId": "b531deaf-6dd3-4d7e-a05e-ac7984805015",
        "code": "sent_0033",
        "sentence": "Hey Boxy!"
    },
    {
        "sentenceId": "ba4c6daa-862b-4308-9fd7-5c2b76b591f8",
        "code": "sent_0034",
        "sentence": "Hi Sox!"
    },
    {
        "sentenceId": "b6d1e08e-f0a0-46a1-847f-ba51bf02d98c",
        "code": "sent_0035",
        "sentence": "Hey Fixie!"
    },
    {
        "sentenceId": "7bf09f7a-4046-4c01-a1cb-4b75d87a0a5b",
        "code": "sent_0036",
        "sentence": "Hi Moxley!"
    },
    {
        "sentenceId": "b64960ce-a9a5-402d-b6f2-c2fcb5a7a790",
        "code": "sent_0037",
        "sentence": "Hey Mocks!"
    },
    {
        "sentenceId": "5f00d875-af57-43cb-8328-324ef57d0004",
        "code": "sent_0038",
        "sentence": "He knocks!"
    },
    {
        "sentenceId": "6ca24424-b3d8-40ab-8557-861779db6cc5",
        "code": "sent_0039",
        "sentence": "Hey Knox!"
    },
    {
        "sentenceId": "08e4cc06-9ef5-4373-b642-09c1c2a68253",
        "code": "sent_0040",
        "sentence": "High blocks!"
    },
    {
        "sentenceId": "22071f4d-9289-4e39-9c1b-74e789a920c5",
        "code": "sent_0041",
        "sentence": "My name is Max Eagle. "
    },
    {
        "sentenceId": "412321b6-8271-4cf1-b86c-a7ca194b065b",
        "code": "sent_0042",
        "sentence": "These are high mixing levels."
    },
    {
        "sentenceId": "9ba99fbc-d8fd-443b-80d5-52f907ba7caa",
        "code": "sent_0043",
        "sentence": "give him oxygen!"
    },
    {
        "sentenceId": "b4d4bfaa-f78b-4753-93a4-ca6b69e12a15",
        "code": "sent_0044",
        "sentence": "Set the volume to maximum."
    },
    {
        "sentenceId": "a0d7dbc7-c45f-4ec4-9cbc-be689dc4269d",
        "code": "sent_0045",
        "sentence": "They hire mock seaters now."
    },
    {
        "sentenceId": "a14138d3-4268-4c79-82ce-9c9d08f5b55c",
        "code": "sent_0046",
        "sentence": "Is your mom's name Moxi too?"
    },
    {
        "sentenceId": "e5efb307-dde0-4679-a5f4-5a98a63952ed",
        "code": "sent_0047",
        "sentence": "Proxy not found."
    },
    {
        "sentenceId": "873a2ece-c9cd-49ab-9d60-79b60e0b20fe",
        "code": "sent_0048",
        "sentence": "Studies found levels of high monoxide."
    },
    {
        "sentenceId": "daead1fa-e728-4246-b8e6-84bcc6e8c88c",
        "code": "sent_0049",
        "sentence": "This shrine locks even better."
    },
    {
        "sentenceId": "70c522ad-6be3-4a04-a9ff-83f9bbd9f5b4",
        "code": "sent_0050",
        "sentence": "When I say Moxi, I mean Moxi."
    },
    {
        "sentenceId": "464b2cd6-697d-468e-a2b1-149567315a87",
        "code": "sent_0051",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "070fd358-cc28-44b4-8b14-660f4c0e3d12",
        "code": "sent_0052",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "513b7911-c466-4218-84fe-eed27906fbbc",
        "code": "sent_0053",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "e4c9aca7-7b1e-4965-90b0-75e05edcc357",
        "code": "sent_0054",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "e61756ec-f261-48b1-ac05-4d193e7e96e3",
        "code": "sent_0055",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "332ad22c-cbb2-45ef-ad8b-44f7ac6cb9b7",
        "code": "sent_0056",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "423837b9-3149-4832-b948-5c4307266487",
        "code": "sent_0057",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "c5a7a947-61e8-461d-b0c8-29c07c443b13",
        "code": "sent_0058",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "9bedb205-c8e2-4510-b131-eaf647e88eb8",
        "code": "sent_0059",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "79b6af69-78fe-4947-b4ab-ceb1c7e0bf66",
        "code": "sent_0060",
        "sentence": "Hi Ace!"
    },
    {
        "sentenceId": "8dbc9e72-1a06-44b4-9f7b-0b329d39cdf1",
        "code": "sent_0061",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "99d4976e-da11-4887-a522-8e26db068471",
        "code": "sent_0062",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "3d0bf8f2-112a-41fc-93a3-87778e8e6c7d",
        "code": "sent_0063",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "5d10007f-62aa-4cb4-8396-6856c5bf8a70",
        "code": "sent_0064",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "b0f6be4d-7248-457f-84aa-dd33956386b4",
        "code": "sent_0065",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "16947da3-f50e-4f6e-8253-5781e6c98dc2",
        "code": "sent_0066",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "affcb6b8-5507-4a65-ad3c-b47b3a26c1e1",
        "code": "sent_0067",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "979b1bcc-b136-4f42-95cc-01502bc42864",
        "code": "sent_0068",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "a7c85b4c-e656-499a-b07c-0d0dcac1e491",
        "code": "sent_0069",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "964c0ced-ecce-4014-83ed-2adef170245a",
        "code": "sent_0070",
        "sentence": "Hey Ace!"
    },
    {
        "sentenceId": "6e9368cd-aa6a-422e-8402-2b3914872ff1",
        "code": "sent_0071",
        "sentence": "Yes, Ace."
    },
    {
        "sentenceId": "639920ea-2b9b-449f-9b87-d3854edb07f5",
        "code": "sent_0072",
        "sentence": "No, Ace."
    },
    {
        "sentenceId": "3f89f5a1-7b65-415c-b48e-3b36cb0c3609",
        "code": "sent_0073",
        "sentence": "I don't know, Ace."
    },
    {
        "sentenceId": "6844edf6-fc2c-4aae-a710-9d0ce9f4ed52",
        "code": "sent_0074",
        "sentence": "Help me, Ace!"
    },
    {
        "sentenceId": "13969247-4450-4722-b815-652a34f5621a",
        "code": "sent_0075",
        "sentence": "Can I ask you a question, Ace?"
    },
    {
        "sentenceId": "1edb8a50-fcfd-40e8-bc5b-499be6d335b5",
        "code": "sent_0076",
        "sentence": "But Ace, what did you do yesterday?"
    },
    {
        "sentenceId": "d0c78974-95cf-4126-8460-49b93c4f099f",
        "code": "sent_0077",
        "sentence": "Tell me Ace, what is your favourite color?"
    },
    {
        "sentenceId": "1386b25f-cf5f-4160-a7f5-a26ac4a443e7",
        "code": "sent_0078",
        "sentence": "Ace, what can I do here?"
    },
    {
        "sentenceId": "bafe3ee4-f598-4a04-b8be-d29e96e80260",
        "code": "sent_0079",
        "sentence": "Ace, please tell me what is 14 times 37."
    },
    {
        "sentenceId": "e3ac19cd-fabf-43dd-9f7f-9b0eee76be9c",
        "code": "sent_0080",
        "sentence": "Say, Ace, which books do you like best?"
    },
    {
        "sentenceId": "da497bfa-4d48-43d8-b7aa-6c80e8a32a90",
        "code": "sent_0081",
        "sentence": "Hey Face!"
    },
    {
        "sentenceId": "2c4080c2-34d6-4dc4-b7ff-c2dff24a7101",
        "code": "sent_0082",
        "sentence": "Hi Grace!"
    },
    {
        "sentenceId": "4199f38c-132d-4b06-ad8a-043ce9bf20af",
        "code": "sent_0083",
        "sentence": "Hey Chase!"
    },
    {
        "sentenceId": "c77ae096-6eb7-4005-8bc3-a67da9b6e23c",
        "code": "sent_0084",
        "sentence": "Hi Bass!"
    },
    {
        "sentenceId": "f9e0cb5f-c811-4bf1-b7e8-2b973d332b59",
        "code": "sent_0085",
        "sentence": "Hey Casey!"
    },
    {
        "sentenceId": "ee7a4eba-a51b-4e8f-bf67-83e07a77b3f2",
        "code": "sent_0086",
        "sentence": "Hi Macy!"
    },
    {
        "sentenceId": "9c09755f-a747-409b-b6ed-1fd3eda8aa4d",
        "code": "sent_0087",
        "sentence": "Hey Stacy!"
    },
    {
        "sentenceId": "97540d51-59b7-4238-b1c8-39c351dd55f1",
        "code": "sent_0088",
        "sentence": "Hey Tracey!"
    },
    {
        "sentenceId": "60302879-a817-492e-87b4-5f1b7f7ab657",
        "code": "sent_0089",
        "sentence": "Hey Ice!"
    },
    {
        "sentenceId": "192387d9-319b-4177-a3fe-798384ff5ca5",
        "code": "sent_0090",
        "sentence": "High Space!"
    },
    {
        "sentenceId": "b5b6f5fe-1a13-4173-b429-050af6649f98",
        "code": "sent_0091",
        "sentence": "My name is Ace Ventura. "
    },
    {
        "sentenceId": "69c4be37-cf3f-4031-94af-0ef52656fa6f",
        "code": "sent_0092",
        "sentence": "This firebrace is dangerous."
    },
    {
        "sentenceId": "ed735ab2-b4d8-4aaa-b64d-aae49d534b9a",
        "code": "sent_0093",
        "sentence": "turn the gray A/C on high!"
    },
    {
        "sentenceId": "ed82d006-ce4d-4118-9bf0-960f7155ca73",
        "code": "sent_0094",
        "sentence": "I like my space."
    },
    {
        "sentenceId": "14bb998e-0685-49e4-899d-be3760aa2b9e",
        "code": "sent_0095",
        "sentence": "My days are full of joy."
    },
    {
        "sentenceId": "d6994a82-07e5-46d0-81d9-22836338bdc2",
        "code": "sent_0096",
        "sentence": "Is your dad's name Ace too?"
    },
    {
        "sentenceId": "e4735c37-429f-415e-bdb8-3c0a7b386395",
        "code": "sent_0097",
        "sentence": "My Ice is melting."
    },
    {
        "sentenceId": "7e08046e-a426-48aa-9ecd-288f330603d0",
        "code": "sent_0098",
        "sentence": "Studies found levels of high acidity."
    },
    {
        "sentenceId": "f1776b8a-8422-4bf5-8726-958fc176eddc",
        "code": "sent_0099",
        "sentence": "This tyre races even better."
    },
    {
        "sentenceId": "540939ff-84f0-433f-a39d-e2d51ed46b67",
        "code": "sent_0100",
        "sentence": "When I say Ace, I mean Ace."
    }
];

export {
    campaigns,
};