import type { DiscordSnowflake } from "./DiscordSnowflake"

// https://discord.com/developers/docs/resources/channel#thread-member-object
export type ThreadMember = {
  id?: DiscordSnowflake;
  user_id?: DiscordSnowflake;
  // 	ISO8601 timestamp
  join_timestamp: string;
  flags: number;
}