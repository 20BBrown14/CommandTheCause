import type { Channel } from "./Channel";
import type { DiscordSnowflake } from "./DiscordSnowflake"
import type { Emoji } from "./Emoji";
import type { GuildFeature } from "./GuildFeature";
import type { GuildMember } from "./GuildMember";
import { GuildScheduledEvent } from "./GuildScheduledEvent";
import type { PrecenseUpdate } from "./PrecenseUpdate";
import type { Role } from "./Role";
import type { Sticker } from "./Sticker";
import type { VoiceState } from "./VoiceState";

// https://discord.com/developers/docs/resources/guild#guild-object
export type Guild = {
  id: DiscordSnowflake;
  name: string;
  icon: string | null;
  icon_hash?: string | null;
  splash: string | null;
  discovery_splash: string | null;
  owner?: boolean;
  owner_id: DiscordSnowflake;
  permissions?: string;
  region?: string | null;
  afk_channel_id: DiscordSnowflake | null;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: DiscordSnowflake | null;
  verification_level: number;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: Role[];
  emojis: Emoji[];
  features: GuildFeature[];
  mfa_level: number;
  application_id: DiscordSnowflake | null;
  system_channel_id: DiscordSnowflake | null;
  system_channel_flags: number;
  rules_channel_id: DiscordSnowflake | null;
  // ISO8601 timestamp
  joined_at?: string;
  large?: boolean;
  unavailable?: boolean;
  member_count?: number;
  voice_states?: VoiceState[];
  members?: GuildMember[];
  channels?: Channel[];
  threads?: Channel[];
  presences?: PrecenseUpdate[];
  max_presences?: number | null;
  max_members?: number;
  vanity_url_code: string | null;
  description: string | null;
  banner: string | null;
  premium_tier: number;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id: DiscordSnowflake | null;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: {
    description: string | null;
    welcome_channels: {
      channel_id: DiscordSnowflake;
      description: string;
      emoji_id: DiscordSnowflake | null;
      emoji_name: string | null;
    }
  };
  nsfw_level: number;
  stage_instances?: {
    id: DiscordSnowflake;
    guild_id: DiscordSnowflake;
    channel_id: DiscordSnowflake;
    topic: string;
    privacy_level: number;
    discoverable_disabled: boolean;
    guild_scheduled_event_id: DiscordSnowflake | null;
  }[];
  stickers?: Sticker[];
  guild_scheduled_events?: GuildScheduledEvent[];
  premium_progress_bar_enabled: boolean;
}