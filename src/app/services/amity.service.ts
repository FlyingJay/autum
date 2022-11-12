import ASCClient, { ConnectionStatus, ApiEndpoint, ChannelRepository, ChannelType } from "@amityco/js-sdk";
import { UserRepository } from '@amityco/js-sdk';

import { API } from '@app/services/api.service';

const apiKey = "b0edbd5f338df262493fd81f030113d9d5088bb6e8606978";

const api = new API()
export const client = ASCClient.create({ apiKey, apiEndpoint: ApiEndpoint.US });
export let user = null;

// Connect user to Amity
export const connectClient = async (userId) => {
  return new Promise((resolve) => {
    client.on("connectionStatusChanged", ({ newValue }) => {
      if (newValue === ConnectionStatus.Connected) {
        user = userId;
        resolve();
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

/*
export const getUser = async () => {
  const liveObject = await UserRepository.getUser(user);
  liveObject.on('dataUpdated', user => {
    console.log(user)
  });
}
*/

/*
export const getChannel = async (channelId) => {
  const liveChannel = await ChannelRepository.getChannel({
    channelId
  });

  liveChannel.on('dataUpdated', data => {
    console.log(data)
  });
}
*/