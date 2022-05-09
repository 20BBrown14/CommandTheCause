// https://discord.com/developers/docs/resources/channel#thread-metadata-object
export type ThreadMetadata = {
  archived: boolean;
  auto_archive_duration: number;
  // ISO8601 timestamp
  archive_timestamp: string;
  locked: boolean;
  invitable?: boolean;
  // ISO8601 timestamp
  create_timestamp?: string | null;
}