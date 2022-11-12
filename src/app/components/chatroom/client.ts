import ASCClient, { ConnectionStatus, ApiEndpoint, ChannelRepository, ChannelType, UserRepository } from "@amityco/js-sdk";

import { API } from '@app/services/api.service';
const api = new API()

// Amity sample-app apiKey
const apiKey = "b0edbd5f338df262493fd81f030113d9d5088bb6e8606978";
export const client = ASCClient.create({ apiKey, apiEndpoint: ApiEndpoint.US });

export let currentUserId = null;

// promisified client connection
export const connectClient = async (userId) => {
  if (client.connectionStatus === ConnectionStatus.Connected) {
    client.removeAllListeners();
    client.unregisterSession();
  }
  return new Promise((resolve) => {
    client.on("connectionStatusChanged", ({ newValue }) => {
      if (newValue === ConnectionStatus.Connected) {
        currentUserId = userId;
        resolve(true);
      }
    });
    client.registerSession({ userId });
  });
};


// Create a chat
export const createChannel = async (id, userId, userId2) => {
  const liveChannel = await ChannelRepository.createChannel({
    channelId: ''+id,
    type: ChannelType.Conversation,
    userIds: [ ''+userId, ''+userId2 ],
  })

  liveChannel.on('dataUpdated', model => {
    console.log(`Channel created: ${model.channelId}`);

    api.likeUpdate(() => {}, id, {
      amity_channel: model.channelId
    })
  });

  liveChannel.on('dataError', error => {
    // Handle channel create error (non-unique channelID)
    console.log(error)
  });
}