import type { DiscordSnowflake } from "./DiscordSnowflake";
import type { Emoji } from "./Emoji";

// https://discord.com/developers/docs/topics/gateway#activity-object
export type Activity = {
  name: string;
  type: number;
  url?: string | null;
  created_at: number;
  timestamps: {
    start?: number;
    end?: number;
  };
  application_id?: DiscordSnowflake;
  details?: string | null;
  state?: string | null;
  emoji?: Emoji | null;
  party?: {
    id?: string;
    size?: number[];
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
  secrets?: {
    join?: string;
    spectate?: string;
    match?: string;
  };
  instance?: boolean;
  flags?: number;
  buttons: {
    label: string;
    url: string;
  }[];
}