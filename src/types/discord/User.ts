import type { DiscordSnowflake } from './DiscordSnowflake'

// https://discord.com/developers/docs/resources/user#user-object
export type User = {
  id: DiscordSnowflake;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  locale?: string;
  verified?: boolean;
  email?: string | null;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
}