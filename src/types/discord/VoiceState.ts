import { DiscordSnowflake } from "./DiscordSnowflake"
import { GuildMember } from "./GuildMember";

// https://discord.com/developers/docs/resources/voice#voice-state-object
export type VoiceState = {
  guild_id?: DiscordSnowflake;
  channel_id: DiscordSnowflake | null;
  user_id: DiscordSnowflake;
  member?: GuildMember;
  session_id: string;
  deaf: boolean;
  mute: boolean;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  self_video: boolean;
  suppress: boolean;
  // ISO8601 timestamp
  request_to_speak_timestamp: string | null;
}