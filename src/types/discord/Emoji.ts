import { DiscordSnowflake } from "./DiscordSnowflake"
import { Role } from "./Role";
import { User } from "./User";

// https://discord.com/developers/docs/resources/emoji#emoji-object
export type Emoji = {
  id: DiscordSnowflake | null;
  name: string | null;
  roles?: Role[];
  users?: User;
  require_colons: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}