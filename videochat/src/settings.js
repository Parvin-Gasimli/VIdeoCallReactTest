import {createClient,createMicrophoneAndCameraTracks} from "agora-rtc-react";

const appId="fff0de4aa61e43bb9bac4268c9accb87";
const token="006fff0de4aa61e43bb9bac4268c9accb87IAB6bn4nXJB8mC4eZMQ6pIuydMGX4uNMFmdTbzQpebIuelpiGh8AAAAAEABLPQ3JDJvtYQEAAQAJm+1h";

export const config={mode:"rtc",codec:"vp8",appId:appId,token:token}
export const useClient=createClient(config);
export const  useMicrophoneAndCameraTracks=createMicrophoneAndCameraTracks();
export const channelName="Main";

