import type { DiscordSnowflake } from "./DiscordSnowflake"
import type { Overwrite } from "./Overwrite";
import type { ThreadMember } from "./ThreadMember";
import type { ThreadMetadata } from "./ThreadMetadata";
import type { User } from "./User";

// https://discord.com/developers/docs/resources/channel#channel-object
export type Channel = {
  id: DiscordSnowflake;
  type: number;
  guild_id?: DiscordSnowflake;
  position?: number;
  permission_overwrites?: Overwrite[];
  name?: string | null;
  topic?: string | null;
  nsfw?: boolean;
  last_message_id?: DiscordSnowflake | null;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: User[];
  icon?: string | null;
  owner_id: DiscordSnowflake;
  application_id?: DiscordSnowflake;
  parent_id?: DiscordSnowflake | null;
  // ISO8601 timestamp
  last_pin_timestamp?: string | null;
  rtc_region?: string | null;
  video_quality_mode?: number;
  message_count?: number;
  member_count?: number;
  thread_metadata?: ThreadMetadata;
  member?: ThreadMember;
  default_auto_archive_duration?: number;
  permissions?: string;
  flags: number;
}