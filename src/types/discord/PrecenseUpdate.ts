import type { Activity } from "./Activity";
import type { DiscordSnowflake } from "./DiscordSnowflake";
import type { User } from "./User"

// https://discord.com/developers/docs/topics/gateway#presence-update
export type PrecenseUpdate = {
  user: User;
  guild_id: DiscordSnowflake;
  status: string;
  activities: Activity[];
  client_status: {
    desktop?: string;
    mobile?: string;
    web?: string;
  };
}