import type { DiscordSnowflake } from './DiscordSnowflake';
import type { User } from './User';

// https://discord.com/developers/docs/resources/guild#guild-member-object
export type GuildMember = {
  user?: User;
  nick?: string | null;
  avatar?: string | null;
  roles: DiscordSnowflake[];
  // ISO8601 timestamp
  joined_at: string;
  // ISO8601 timestamp
  premium_since?: string | null;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
  // ISO8601 timestamp
  communication_disabled_until?: string | null;
}