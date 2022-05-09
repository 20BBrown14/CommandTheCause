import type { DiscordSnowflake } from "./DiscordSnowflake"

// https://discord.com/developers/docs/resources/channel#overwrite-object
export type Overwrite = {
  id: DiscordSnowflake,
  type: number;
  allow: string;
  deny: string;
}