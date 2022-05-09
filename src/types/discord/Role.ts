import { DiscordSnowflake } from "./DiscordSnowflake"

// https://discord.com/developers/docs/topics/permissions#role-object
export type Role = {
  id: DiscordSnowflake;
  name: string;
  color: number;
  hoist: boolean;
  icon?: string | null;
  unicode_emoji?: string | null;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: {
    bot_id?: DiscordSnowflake;
    integration_id?: DiscordSnowflake;
    premium_subscribed?: null;
  }
}