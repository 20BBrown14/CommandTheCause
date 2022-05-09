import type { DiscordSnowflake } from "./DiscordSnowflake"
import type { User } from "./User";

// https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object
export type GuildScheduledEvent = {
  id: DiscordSnowflake;
  guild_id: DiscordSnowflake;
  channel_id: DiscordSnowflake | null;
  creator_id?: DiscordSnowflake | null;
  name: string;
  description?: string | null;
  // ISO8601 timestamp
  scheduled_start_time: string;
  // ISO8601 timestamp
  scheduled_end_time: string | null;
  privacy_level: number;
  status: number;
  entity_type: number;
  entity_id: DiscordSnowflake | null;
  entity_metadata: {
    location?: string;
  } | null;
  creator?: User;
  user_count?: number;
  image?: string | null;
}