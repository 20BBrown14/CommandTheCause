import type { DiscordSnowflake } from "./DiscordSnowflake"
import type { User } from "./User";

// https://discord.com/developers/docs/resources/sticker#sticker-object
export type Sticker = {
  id: DiscordSnowflake;
  pack_id?: DiscordSnowflake;
  name: string;
  description: string | null;
  tags: string;
  asset?: string;
  type: number;
  format_type: number;
  available?: boolean;
  guild_id?: DiscordSnowflake;
  user?: User;
  sort_value?: number;
}